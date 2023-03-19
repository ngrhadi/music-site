curl \
  -d "client_id=vite01" \
  -d "username=jhos" \
  -d "password=P@ssw0rd" \
  -d "grant_type=password" \
  "http://localhost:8080/realms/master/protocol/openid-connect/token"
