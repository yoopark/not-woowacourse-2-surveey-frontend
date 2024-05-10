import { ChevronRight } from 'lucide-react';

import {
  AppBar,
  AppBarBack,
  AppBarTitle,
} from '@/components/additional-ui/app-bar';
import {
  ButtonRadioGroup,
  ButtonRadioGroupItem,
} from '@/components/additional-ui/button-radio-group';
import { Button } from '@/components/ui/button';
import { type PropsWithOnNext } from '@/types/props';

const EnterMostImportantValueStep = ({ onNext }: PropsWithOnNext) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <AppBar>
        <AppBarBack />
        <AppBarTitle>우모어 · 우리는 모두 어린이였다</AppBarTitle>
      </AppBar>
      <div className="flex w-full flex-col items-start gap-8 pt-14">
        <div className="mt-4 flex flex-col gap-4">
          <p className="text-6xl font-extrabold">Q5</p>
          <h1 className="text-2xl font-semibold">
            지금 당신의 삶에서 <br /> 가장 중요한 가치를 말해주세요
          </h1>
        </div>
        <ButtonRadioGroup
          defaultValue="money"
          className="flex w-full flex-col gap-2"
        >
          <ButtonRadioGroupItem value="money">
            돈, 물질적인 풍요
          </ButtonRadioGroupItem>
          <ButtonRadioGroupItem value="family">가족</ButtonRadioGroupItem>
          <ButtonRadioGroupItem value="fame">
            명예, 인정받는 삶
          </ButtonRadioGroupItem>
          <ButtonRadioGroupItem value="success">
            커리어, 취업
          </ButtonRadioGroupItem>
          <ButtonRadioGroupItem value="etc">기타</ButtonRadioGroupItem>
        </ButtonRadioGroup>
      </div>
      <Button
        variant="secondary"
        onClick={onNext}
        className="fixed inset-x-0 bottom-4 mx-auto w-full max-w-[calc(100vw-2rem)] sm:max-w-[calc(512px-2rem)]"
      >
        <ChevronRight className="mr-2 h-5 w-5" />
        다음
      </Button>
    </div>
  );
};

export default EnterMostImportantValueStep;
