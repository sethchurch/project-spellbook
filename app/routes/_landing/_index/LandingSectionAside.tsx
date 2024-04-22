import { Link } from '@/components/Elements/Link';
import { Button } from '@/components/ui/Button';

interface LandingSectionAsideProps {
  buttonText?: string;
  descriptionText: string;
  headerText: string;
  superHeaderText: string;
  direction?: 'reverse' | 'normal';
}

const LandingSectionAside = ({
  buttonText,
  descriptionText,
  headerText,
  superHeaderText,
  direction,
}: LandingSectionAsideProps) => {
  return (
    <div className="flex flex-col items-start gap-3">
      <p className="text-sm font-medium uppercase tracking-wider text-primary">{superHeaderText}</p>
      <h2 className="whitespace-pre-wrap text-6xl font-extrabold uppercase tracking-tight">
        {headerText.split(' ').join('\n\r')}
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
