import { Button } from '@nextui-org/button';
import { Modal, ModalBody, ModalContent, type ModalProps } from '@nextui-org/modal';
import { IconFile, IconUpload } from '@tabler/icons-react';
import { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';
import toast from 'react-hot-toast';

import type { Character } from '@/config/CharacterConfig';
import { useCharacterStore } from '@/hooks/useCharacterStore';

interface ImportCharactersModalProps extends Partial<ModalProps> {}

const ImportCharactersModal = ({ isOpen, onClose }: ImportCharactersModalProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const importCharacters = useCharacterStore((state) => state.importCharacters);
  const invalidMessage = 'Invalid file format';

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = () => {
        let characterList;

        try {
          characterList = JSON.parse(reader.result as string) as Character[];
        } catch (error) {
          return toast.error(invalidMessage);
        }

        if (characterList === undefined || !Array.isArray(characterList)) {
          return toast.error(invalidMessage);
        }

        if (!characterList.every((character) => character.name && character.class)) {
          return toast.error(invalidMessage);
        }

        return setCharacters(characterList!);
      };
      reader.readAsText(file);
    });
  }, []);

  const clearCharacters = () => {
    setCharacters([]);
  };

  const handleClose = () => {
    clearCharacters();
    if (onClose) onClose();
  };

  const handleImport = () => {
    if (characters.length > 0) {
      importCharacters(characters);
      toast.success('Import successful');
    }
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} placement="center" size="lg" onClose={handleClose}>
      <ModalContent>
        <ModalBody className="p-6">
          <div className="flex flex-col gap-3">
            <p className="mb-2 text-center text-sm">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <Dropzone accept={{ 'application/json': ['.json'] }} onDrop={onDrop} onFileDialogOpen={clearCharacters}>
              {({ getRootProps, getInputProps, acceptedFiles }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className="flex h-64 w-full items-center justify-center rounded-lg border-3 border-dotted border-stone-300 dark:border-zinc-700">
                    {acceptedFiles && acceptedFiles[0] ? (
                      <div className="flex max-w-xs items-center divide-x overflow-hidden rounded-md outline outline-1 dark:divide-zinc-700 dark:bg-zinc-800 dark:outline-zinc-700">
                        <div className="grid h-full place-items-center px-3 py-2">
                          <IconFile />
                        </div>
                        <div className="h-full truncate px-3 py-2 text-sm">{acceptedFiles[0].name}</div>
                      </div>
                    ) : (
                      <IconUpload />
                    )}
                  </div>
                </div>
              )}
            </Dropzone>
            {characters.length > 0 ? (
              <div className="flex flex-col gap-3">
                <p className="text-center text-sm">Import List</p>
                <div className="rounded-lg border-3 border-dotted border-stone-300 px-2 py-3 dark:border-zinc-700">
                  <div className="flex max-h-32 w-full flex-col gap-1 overflow-y-scroll">
                    {characters.map((character) => (
                      <div key={character.name} className="flex flex-col">
                        <p className="text-sm font-semibold">{character.name}</p>
                        <p className="text-xs font-light">{character.class}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="px-6 font-semibold" color="primary" radius="sm" size="lg" onClick={handleImport}>
                  Import
                </Button>
              </div>
            ) : null}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { ImportCharactersModal };
