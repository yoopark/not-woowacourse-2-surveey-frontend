# 구현과제 2. Surveey

> 이 과제는 [스모어](https://home.smore.im/template?type=form&c=survey)를 모티브로 제작되었습니다.

## 유의사항

**읽기 좋은 코드**에 집중해주세요.

- 기능의 정상 동작 여부
- 작성하는 코드의 퀄리티
- Git 관리 수준
- PR, 코드 리뷰 방식

최소 기능 구현만 만족하면 **자유롭게 커스텀**이 가능합니다.

- 디자인 커스텀 가능 (@shadcn/ui 안 써도 됨)
- 폴더 구조 커스텀 가능
- 코드 컨벤션 커스텀 가능
- 의존성 설치 및 삭제 가능

**README 작성**은 필수입니다.

- 자신의 코드에서 강조할 부분
- 자신의 코드에서 부족한 부분
- 기타 코드를 이해하는데 도움을 주는 내용

Fork & PR 등 과제 진행과 관련된 내용은,  
 [우테코 따라잡기 노션 - 구현과제 진행 관련 유의사항](https://yopark.notion.site/08c99780759944118452d77b6927775a) 문서를 참고해주세요.

배포 이후 **배포 주소**를 말씀해주시면 해당 주소를 CORS에 추가하도록 하겠습니다.

## API

API 주소 : https://not-woowacourse-api.yopark.dev

자세한 내용은 [Swagger](https://not-woowacourse-api.yopark.dev/api-docs)를 참고해주세요.

이번 과제에서 사용할 API는 **0.x(공통), 2.x(Surveey)** 입니다.

> 이걸 만든 사람은 백엔드 개발자가 아닙니다. 사용해보시고 오류나 빈틈이 있으면 채널톡 부탁드립니다 😭

## 구현해야 할 기능

> Surveey 시연 링크 : https://not-woowacourse-2-surveey-frontend-for-example.vercel.app  
> Surveey 시연 레포 : https://github.com/yoopark/not-woowacourse-2-surveey-frontend-for-example

나만의 설문조사를 만들어봅시다 ✨

단, 다음의 제약사항을 지켜주세요.

- 설문 진행은 퍼널 뷰로 이루어져야 합니다. 한 화면에는 한 문항만 보여야 합니다.
- 설문 문항 개수는 5개 이상이어야 합니다.
- 설문 문항 타입은 3개 이상이어야 합니다.
- 기타를 포함한 라디오 선택 문항이 1개 이상 포함되어야 합니다. 기타 선택 시 유저가 텍스트를 입력할 수 있어야 합니다.
- 조건에 맞지 않는 입력의 경우, 에러가 명시적으로 표현되어야 합니다.
- 필수/선택이 명시적으로 표현되어야 합니다.

> 토스 제품 디자인 원칙(PP: Product Principle)엔 “One thing for One Page”라는 원칙이 있어요. 화면 하나에는 명확한 목표 하나만 있어야 한다는 건데요. 이 원칙에 따라 제품을 만들다 보면 ‘퍼널’이 많이 생깁니다. 토스페이먼츠의 제품도 예외는 아니에요. 그래서 저희 프론트엔드 개발자들은 퍼널의 흐름을 잘 관리해야 하죠. 퍼널이란 사용자가 웹사이트나 애플리케이션을 방문해서 최종 목표까지 달성하는데 거치는 단계를 뜻합니다. [출처](https://toss.tech/article/engineering-note-1)

설문 문항 타입의 종류는 다음과 같습니다.

- **text** : 문자열
- **number** : 숫자
- **date** : 연월일 형식 (ex. 2024-05-10)
- **email** : 이메일 형식 (ex. john@woowacourse.com)
- **phone** : 전화번호 형식 (ex. 000-0000-0000)
- **url** : URL 형식 (ex. https://www.naver.com)
- **json** : JSON 형식에만 맞으면 통과
- **etc** : 무조건 통과

> 백엔드 구현하고 나서 API 사용에 대하여 더 자세히 알려드리겠습니다 🙇‍♂️

## 기술 스택 관련 제한사항

- React Hook Form, Zod를 사용해주세요.
- 퍼널 뷰 제작 시 @toss/use-funnel을 사용하지 말아주세요.
