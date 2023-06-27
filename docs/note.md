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

# Section 2. MySQL, MongoDB 설계와 구축

## 1. Database 개요

- 데이터베이스 설명

## 2. MongoDB Atlas 클라우드 구축

- MongoDB에서 Atlas를 이용하여 지원하는 Cloud DB 구축

## 3. MongoDB 접근 권한 설정 & Compass 셋업

- IP 허용 및 DB 유저 생성 설정
- Compass를 이용한 DB 접근 안내

## 4. MongoDB CRUD

- MongoDB CLI를 이용한 CRUD 안내

## 5. MySQL AWS 클라우드 구축 & Workbench 연결

- AWS Lightsail을 이용한 MySQL 구축 안내
- Workbench를 이용한 DB 클라이언트 접근 안내

## 6. MySQL CRUD

- MySQL CRUD 예제 실습

# Section 3. NestJS 개요 및 객체지향 디자인 패턴

## 1. NestJS 개발 환경 셋팅 & hello world!

- nestjs 프로젝트 생성 및 프로젝트 구조 안내

## 2. NestJS를 위한 VSCode 셋업 및 ESLinst, Prettier

- VSCode 단축키 설명 및 ESLint, Prettier 설명

## 3. NestJS 구조 & Controller 패턴

- NestJS 구조 안내
- Controller 에서 사용할 수 있는 데코레이터들 소개 (Controller, Get, Post, HttpCode, Header, Req, Body, Param 등...)

## 4. Providers & 의존성 주입 (DI)

- Service, Repository, Factory, Helper 등 기본 Nest 클래스의 대부분은 `Provider`이다. ([참고 자료](https://www.wisewiredbooks.com/nestjs/overview/04-provider.html))
  - Provider의 주요 기능은 `종속성을 주입`할 수 있다는 것이다.
  - 즉, 개체는 서로 다양한 관계를 형성할 수 있으며 개체의 인스턴스를 연결하는 기능은 대부분 Nest 런타임 시스템에 위임될 수 있다.
  - `app.module.ts` 내 `providers` 배열에 종속성 주입 가능.
    - 종속성 주입 대상은 `Injectable` 데코레이터를 사용해야한다.
    - `Injectable` 데코레이터는 메타데이터를 첨부하는데, 이 메타데이터는 CatsService가 Nest IoC 컨테이너에서 관리할 수 있는 클래스임을 선언한다.
