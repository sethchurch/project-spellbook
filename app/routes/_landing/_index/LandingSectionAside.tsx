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
      <p className="text-xs font-medium uppercase tracking-wider text-primary md:text-sm">{superHeaderText}</p>
      <h2 className="text-4xl font-extrabold uppercase tracking-tight md:text-6xl">
        {headerText.split(' ').map((word, index) => (
          <p key={`${word}-${index}`}>{word}</p>
        ))}
      </h2>
      <p className="mb-3 text-sm font-normal tracking-wide md:text-base">{descriptionText}</p>
      <Link className={direction === 'reverse' ? 'self-end' : ''} to="/tavern">
        <Button className="font-normal" color="primary">
          {buttonText ?? 'Get Started'}
        </Button>
      </Link>
    </div>
  );
};

export { LandingSectionAside };
