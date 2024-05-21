import { redirect } from 'next/navigation';

import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { ChevronRight } from 'lucide-react';
import { useSetRecoilState } from 'recoil';
import { toast } from 'sonner';

import { surveyFormValuesAtom } from '@/atoms/form-values-atom';
import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/additional-ui/app-bar';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SURVEY_FORM_ID, SURVEY_FORM_NAME } from '@/constants/form';
import { TOAST_MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { type PropsWithOnNext } from '@/types/props';

const EnterLifeSatisfactionStep = ({ onNext }: PropsWithOnNext) => {
  const { control, getFieldState, setFocus, getValues } = useFormContext();

  const { invalid } = getFieldState(SURVEY_FORM_NAME.LIFE_SATISFACTION);

  const setFormValues = useSetRecoilState(surveyFormValuesAtom);

  const handleNext = () => {
    if (onNext !== undefined) {
      onNext();
    }

    const value = getValues(SURVEY_FORM_NAME.LIFE_SATISFACTION);

    setFormValues((prev) => ({
      ...prev,
      [SURVEY_FORM_NAME.LIFE_SATISFACTION]: value,
    }));
  };

  useEffect(() => {
    setFocus(SURVEY_FORM_NAME.LIFE_SATISFACTION);
  }, [setFocus]);

  useEffect(() => {
    if (
      [
        SURVEY_FORM_NAME.AGE,
        SURVEY_FORM_NAME.GENDER,
        SURVEY_FORM_NAME.MBTI,
        SURVEY_FORM_NAME.CHILDHOOD_DREAM,
        SURVEY_FORM_NAME.MOST_IMPORTANT_VALUE,
        // SURVEY_FORM_NAME.LIFE_SATISFACTION,
        // SURVEY_FORM_NAME.EMAIL,
      ].some((key) => getValues(key) === undefined)
    ) {
      toast.error(TOAST_MESSAGES.INVALID_STEP);

      redirect(ROUTES.ROOT);
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <AppBar>
        <AppBarBack />
        <AppBarTitle>우모어</AppBarTitle>
      </AppBar>
      <div className="flex w-full flex-col items-start gap-8 pt-14">
        <div className="mt-4 flex flex-col gap-4">
          <p className="text-6xl font-extrabold">Q6</p>
          <h1 className="text-2xl font-semibold">
            10년 뒤의 내가 봤을 때 <br /> 지금 당신의 삶은 몇 점인가요?
          </h1>
        </div>
        <FormField
          control={control}
          name={SURVEY_FORM_NAME.LIFE_SATISFACTION}
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel
                htmlFor={SURVEY_FORM_ID.LIFE_SATISFACTION}
                className="text-sm text-white"
              >
                만족도
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  inputMode="numeric"
                  id={SURVEY_FORM_ID.LIFE_SATISFACTION}
                  min="1"
                  max="10"
                  placeholder="1 ~ 10"
                  className="text-black"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <Button
        type="button"
        variant="secondary"
        onClick={handleNext}
        disabled={invalid}
        className="fixed inset-x-0 bottom-4 mx-auto w-full max-w-[calc(100vw-2rem)] sm:max-w-[calc(512px-2rem)]"
      >
        <ChevronRight className="mr-2 h-5 w-5" />
        다음
      </Button>
    </div>
  );
};

export default EnterLifeSatisfactionStep;