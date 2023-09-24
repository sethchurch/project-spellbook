import { Button, Modal, Stack, Textarea, TextInput } from '@mantine/core';

interface BasicCreatorModalProps {
  opened: boolean;
  close: () => void;
}

const BasicCreatorModal = ({ opened, close }: BasicCreatorModalProps) => {
  return (
    <Modal
      centered
      opened={opened}
      overlayProps={{ backgroundOpacity: 0.5, blur: 3 }}
      title="Character Creator"
      onClose={close}
    >
      <Stack>
        <TextInput withAsterisk description="What's is the name of this character?" label="Character Name" />
        <Textarea
          withAsterisk
          description="Who are they and what is their story?"
          label="Character Backstory"
          rows={10}
        />

        <Button mt={10} onClick={close}>
          Create
        </Button>
      </Stack>
    </Modal>
  );
};

export { BasicCreatorModal };
