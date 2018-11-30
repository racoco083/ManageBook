# ManageBook
### RESTful API using MongoDB & Mongoose & Express
MongoDB, Mongoose 와 Express 를 사용하여 간단한 RESTful API 를 구현합니다.  

### HTTP 상태 코드
204(콘텐츠 없음): 서버가 요청을 성공적으로 처리했지만 콘텐츠를 제공하지 않는다.
404(Not Found, 찾을 수 없음): 서버가 요청한 페이지(Resource)를 찾을 수 없다.
예를 들어 서버에 존재하지 않는 페이지에 대한 요청이 있을 경우 서버는 이 코드를 제공한다.
500(내부 서버 오류): 서버에 오류가 발생하여 요청을 수행할 수 없다.

### API 목록
| ROUTE                     | METHOD | DESCRIPTION               |
|---------------------------|--------|---------------------------|
| /api/books                | GET    | 모든 book 데이터 조회     |
| /api/books/:book_id       | GET    | _id 값으로 데이터 조회    |
| /api/books/author/:author | GET    | author 값으로 데이터 조회 |
| /api/books                | POST   | book 데이터 생성          |
| /api/books/:book_id       | PUT    | book 데이터 수정          |
| /api/books/:book_id       | DELETE | book 데이터 제거          |
| /api/books                | DELETE | 모든 book 데이터 제거      |
