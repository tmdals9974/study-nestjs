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

## 5. Modules & 캡슐화

- 모듈/컨트롤러/서비스 생성 시 명령어를 사용하면 파일을 생성해주면서 루트 모듈과 각 모듈에 자동으로 연결해줌.
  - `nest g module cats`
  - `nest g controller cats`
  - `nest g service cats`

## 6. [보충] 캡슐화 추가 설명

- nestjs의 모듈과 캡슐화에 대한 부가 설명

## 7. Nest Middleware

- 미들웨어는 라우트 핸들러 이전에 호출되는 함수. Express 미들웨어와 동일하다.
- `nest g middleware logger`
- 생성된 `logger.middleware.ts` 파일 수정 (`use(req: Request, res: Response, next: NextFunction)`)
- 이후 use 메소드 내에 로직 작성
- middleware를 module에 등록

```typescript
//app.module.ts
@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  //middleware는 configure로 등록 가능
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*"); // forRoutes("cats") 와 같이 적용시킬 대상을 한정할 수 있음
  }
}
```

## 8. Exception filter & Pipes

- HttpException

  - nestjs에서 기본으로 지원해주는 Exception

  ```typescript
  @Get()
  getCat() {
    throw new HttpException('error', 401);
    //api 리턴값: { statusCode: 401, message: "error" }
  }
  ```

- Exception Filter

  - `ExceptionFilter` 인터페이스를 구현하여 [nestjs 전역/컨트롤러/일부 api]에 오류 필터를 걸 수 있음.
    - 컨트롤러/일부 API에 오류 필터 시, 매칭되는 라우터가 없거나 하는 경우에는 필터가 걸리지 않음.
    - nestjs 전역에 처리 시, 모든 오류에 대응 가능

  ```typescript
  //http-exception.filter.ts
  @Catch(HttpException)
  export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      const status = exception.getStatus();
      const error = exception.getResponse(); //string | object

      if (typeof error === "string") {
        response.status(status).json({
          success: false,
          timestamp: new Date().toISOString(),
          path: request.url,
          error,
        });
      } else {
        response.status(status).json({
          statusCode: status,
          timestamp: new Date().toISOString(),
          ...error,
        });
      }
    }
  }

  //cats.controller.ts
  @Controller("cats")
  @UseFilters(HttpExceptionFilter) //해당 컨트롤러에 필터 적용
  export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    @UseFilters(HttpExceptionFilter) //특정 api에 필터 적용
    getCat() {
      throw new HttpException("error", 401);
      //api 리턴값: { statusCode: 401, timestamp: "...", path: "/cats", message: "error" }
    }
  }

  //main.ts
  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new HttpExceptionFilter()); //전역 필터 적용
    await app.listen(8080);
  }
  bootstrap();
  ```

- Pipe
  - 타입 변환과 유효성 검사를 자동으로 해주는 기능.
  - ParseIntPipe, ParseBoolPipe, ParseArrayPipe, ParseUUIDPipe 등 여러 파이프가 내장되어있음.
  - 아래와 같이 사용 가능
  ```typescript
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    //@Param(id) id 로 사용 시 타입 추측은 any 이며, 실제로는 string으로 반환됨.
    //Pipe를 이용하여 number로 변환. number변환이 불가능할 경우 Exception 반환.
    return this.catsService.findOne(id);
  }
  ```

## 9. [보충] Pipe 패턴에 대하여

- [Pipe 패턴이란?](https://learn.microsoft.com/en-us/azure/architecture/patterns/pipes-and-filters)
- 커스텀 파이프 생성 강의
- 동시에 여러개의 파이프를 이용하는 예제 안내

## 10. Interceptors & AOP 패턴

- Interceptors

  - API `실행 전` 과 `실행 후` 모두 핸들링 가능

  ```typescript
  // success.interceptor.ts
  @Injectable()
  export class SuccessInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      console.log("Before..."); //컨트롤러 실행 전 로그찍힘

      return next.handle().pipe(map((data) => ({ success: true, data }))); //반환값에 관여함.
    }
  }
  ```

# Section 4. 프로젝트 1: 고양이 정보 커뮤니티

## 1. 프로젝트 설계

- 프로젝트 결과물 및 커리큘럼 소개

## 2. NestJS와 DB 연결하기, 환경 변수 설정

- MongoDB
  - `mongoose`를 이용하여 mongoDB 연결
  - nestjs에서 typescript에서 더 쉽게 이용할 수 있도록 래핑한 `@nestjs/mongoose`를 제공
- 환경 변수
  - `@nestjs/config`을 설치하여 `.env` 사용 가능

## 3. DB 스키마, Controller 설계 & validation

- DB 스키마
  - `cats.schema.ts` 파일 참고
- 스키마 내 Validation
  - `class-validator` `class-transformer` 라이브러리를 쓰면 데코레이터를 이용하여 validation 가능.
  - 사용하려면 main.ts에 `app.useGlobalPipes(new ValidationPipe());` 등록 필요.
  - 사용법은 `cats.schema.ts` 파일 참고

## 4. 회원가입 서비스 개발 & DTO 패턴

- DTO 패턴을 이용하여 `Client > Controller > Service > DB` 모든 과정에서 DTO를 이용.
  - `Client > Controller` 과정에선 DTO를 이용하여 Validation 가능.
  - `cats.request.dto.ts` 파일 참고
- Service 단에서 Mongoose를 이용하기 위한 단계
  - `cats.module.ts`에 `imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])]` 등록
  - `cats.service.ts`에 `constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}` 등록
  - 이후 `await this.catModel.exists({ email })` 처럼 사용 가능
- `bcrypt, @types/bcrypt`를 이용하여 해쉬/암호화 가능
- `Schema`에서 `virtual` 함수를 이용하여, 가상의 클래스?필드?를 생성하여 반환할 수 있음. 사용자에게 반환할 때 필터링하여 보여주고 싶을 때 주로 사용함.

## 5. NestJS와 fastify & 협업을 위한 API 문서 만들기, CORS 문제

- Fastify

  - Nest는 fastify와 express를 모두 호환하지만, express가 기본 http 공급자임.
  - fastify가 express보다 성능이 더 좋으나, 생태계가 좁기 때문.
  - 추후 성능 이슈가 있을 경우 fastify로 변경하는 것도 고려해볼만 함.

- Swagger

  - `@nestjs/swagger` `[swagger-ui-express, fastify-swagger]`
  - 사용하려면 `main.ts`에 등록 필수
  - api에 @ApiOperation 등을 이용하여 추가정보등록이 가능하다.
  - dto에 @ApiProperty 등을 이용하여 추가정보등록이 가능하다.

- Schema, DTO 간 중복되는 선언 문제
  - 재사용성 향상을 위해 Schema를 기준으로 DTO에서 상속받는 형식이 가능하.
  - 상속받을때 nestjs에서 제공하는 PartialType, PickType, OmitType 등을 이용하여 커스텀 가능하다. [공식문서](https://docs.nestjs.com/openapi/mapped-types)

## 6. Repository 패턴과 레이어 분리

- Respository 패턴
  - service: 비지니스 로직
  - repository : db 접근 레이어
  - 여러개의 Service단에서 repository를 재사용 가능. 책임/분리 명확해짐.
  - 여러개의 db를 사용할 때 더 효율적.

## 7. JWT와 로그인 서비스 & 순환 참조 모듈

- [jwt](https://docs.nestjs.com/security/authentication)

  - npm i @nestjs/jwt @nestjs/passport passport-jwt passport
  - npm i -D @types/passport-jwt
  - 참고파일: `auth.module.ts`, `auth.service.ts` `jwt.guard.ts`, `jwt.strategy.ts`

- 순환 참조 모듈
  - 각 모듈간 서로 import하는 순환 참조 형태가 되었다면, 양쪽 다 `forwardRef(() => CatsModule)` 과 같은 형태로 바꿈으로 해결할 수 있다.

## 8. passport와 인증 전략 & Custom decorator

- passport
  - jwt 인증 시 사용
- custom decorator
  - `user.decorator.ts` 참고

## 9. Swagger API 보안 설정 & 로그인 API 프론트엔드와 연결

- `express-basic-auth`
  - npm i express-basic-auth
  - 위 라이브러리를 이용해 특정경로에 아이디/비밀번호를 이용한 보안설정이 가능하다.
  ```typescript
  //main.ts
  async function bootstrap() {
    //...
    app.use(
      ["/docs", "/docs-json"],
      expressBasicAuth({
        challenge: true,
        users: { [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD },
      })
    );
    //...
  }
  ```

## 10. Multer와 미디어 파일 서비스 (mp3, mp4, img 등)
- [Multer](https://docs.nestjs.com/techniques/file-upload)
  - npm i -D @types/multer
  - `multer.options.ts` : Multer 파일 저장 옵션은 해당 파일 참고 
  - Module 등록, Api에서의 사용은 `cats.controller.ts`, `cats.module.ts` 참고
  - StaticAsset 등록은 `main.ts` 참고