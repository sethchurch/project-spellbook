import { Button } from '@/components/Elements/Button';
import { Link } from '@/components/Elements/Link';
import { cn } from '@/utils/cn';

interface LandingSectionAsideProps {
  buttonText?: string;
  descriptionText: string;
  headerText: string;
  superHeaderText: string;
  direction?: 'reverse' | 'normal';
  className?: string;
}

const LandingSectionAside = ({
  buttonText,
  descriptionText,
  headerText,
  superHeaderText,
  direction,
  className,
}: LandingSectionAsideProps) => {
  return (
    <div className={cn('flex flex-col items-start gap-3', className)}>
      <p className="text-sm font-medium uppercase tracking-wider text-primary">{superHeaderText}</p>
      <h2 className="text-6xl font-extrabold uppercase tracking-tight">
        {headerText.split(' ').map((word, index) => (
          <p key={`${word}-${index}`}>{word}</p>
        ))}
      </h2>
      <p className="mb-3 font-normal tracking-wide">{descriptionText}</p>
      <Link className={direction === 'reverse' ? 'self-end' : ''} to="/tavern">
        <Button className="font-normal" color="primary">
          {buttonText ?? 'Get Started'}
        </Button>
      </Link>
    </div>
  );
};

export { LandingSectionAside };
