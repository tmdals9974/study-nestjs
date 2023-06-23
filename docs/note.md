# Section 0. 첫 시작

## 1. 강좌 소개

- Nestjs 소개
- 강좌 커리큘럼 소개

## 2. Node, VSCode 설치 + Prettier 셋업

- 개발 환경 설정

## 3. 웹 앱 아키텍쳐와 HTTP 프로토콜

- 프론트엔드, 백엔드 구조와 HTTP 프로토콜에 대한 간략한 설명

## 4. Restfull API에 대하여

- [Restfull API](https://docs.microsoft.com/ko-kr/azure/architecture/best-practices/api-design)에 대한 설명

# Section 1. NestJS를 위한 express 핵심 원리

## 1. express + ts 개발 환경 셋업 & hello world!

- `./letsStart/` 폴더에 프로젝트 세팅
- `tsc-watch`를 이용하여 핫로드 지원 가능

## 2. Postman 설치

- Postman 설명 및 설치 안내

## 3. 고양이 데이터 모킹하기

- 목업 데이터 생성

## 4. express 미들웨어 이해하기

- express 구조 설명, express 미들웨어 설명
- express는 위에서 순차대로 읽어서 실행하기 때문에, 미들웨어들은 위치/순서가 중요하다.
- 동일한 라우터가 존재해도, next를 사용한다면 두개가 순차적으로 작동 할 수 있다.

## 5. 고양이 데이터 Create Read API 개발

- READ, CREATE API 구현

## 6. 고양이 route 분리, 모듈화

- route 모듈화

## 7. 고양이 데이터 Update Delete API 개발

- UPDATE, DELETE API 구현

## 8. express 싱글톤 패턴, 서비스 패턴

- app.ts 내 express에 싱글톤 패턴 적용
  - 싱글톤 패턴 : 객체의 인스턴스가 무조건 하나만 생성되게 하는 패턴. 메모리 낭비 방지 및 데이터 공유를 위함
- cats.model.ts 파일에 비즈니스 로직 분리
