import {
  type MouseEventHandler,
  type ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

import { Button } from '@/components/ui/button';

type ButtonRadioGroupContextProps = {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const ButtonRadioGroupContext =
  createContext<ButtonRadioGroupContextProps | null>(null);

type ButtonRadioGroupProps = {
  children: ReactNode;
  defaultValue: string;
  className?: string;
  onValueChange?: (value: string) => void;
};

const ButtonRadioGroup = ({
  children,
  defaultValue,
  className,
  onValueChange,
}: ButtonRadioGroupProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const { value } = event.currentTarget;

    if (onValueChange !== undefined) {
      onValueChange(value);
    }

    setValue(value);
  };

  const contextValue = { value, onClick: handleClick };

  return (
    <div className={className}>
      <ButtonRadioGroupContext.Provider value={contextValue}>
        {children}
      </ButtonRadioGroupContext.Provider>
    </div>
  );
};

type ButtonRadioGroupItemProps = {
  children: ReactNode;
  value: string;
  className?: string;
};

const ButtonRadioGroupItem = ({
  children,
  value,
  className,
}: ButtonRadioGroupItemProps) => {
  const context = useContext(ButtonRadioGroupContext);

  if (context === null) {
    throw new Error(
      'ButtonRadioGroupItem must be used inside ButtonRadioGroup',
    );
  }

  const variant = context.value === value ? 'default' : 'secondary';

  return (
    <Button
      variant={variant}
      size="lg" /* FIXME: not flexible */
      value={value}
      onClick={context.onClick}
      className={className}
    >
      {children}
    </Button>
  );
};

export { ButtonRadioGroup, ButtonRadioGroupItem };
