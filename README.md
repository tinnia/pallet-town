# Frontiers - KB Capital Market Front Office System

## Services

- Frontend: React + Typescript
- Backend: Java + Spring Boot

## Instructions

### Running the Application

#### Environment Requirements

- Docker v18.09+ & Docker Compose
- Access to Git submodules
  - frontiers-docker-images
  - frontiers-maven-dependencies

#### Commands

```shell
make setup
make preview
```

- Set `frontiers.kbstar.com` to route to `ingress` after running the command above

### Development

#### Environment Requirements

- Node 16+
- Java 8+
- Docker

#### Commands

Refer to each Makefile.

## Dev Agreement

- App.tsx 은 라우팅 기능만 제공하고, App.test.tsx 라우팅 관련된 테스트만 수행한다.
- 백엔드 테스트 메소드 이름에서 persona 이름은 지운다.
- "information" 같은 제네럴한 이름은 지양한다.
- 백엔드 테스트 메소드 이름은 given_when_then 스타일로 작성한다.
- 프론트엔드 테스트는 it 함수를 사용한다.
- 프론트엔드 테스트는 integration 테스트보단 unit 테스트 방식을 지향한다.
- Faker 라이브러리를 적극적으로 활용하여 테스트를 진행한다.
