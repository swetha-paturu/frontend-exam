FROM node:12.19.0 as react-built  

RUN mkdir -p /app
                                                                                                                                                                                                                  
WORKDIR /app                                                                                                                                                                                                      
                                                                                                                                                                                                                  
COPY package.json .                                                                                                                                                                                               
#COPY package-lock.json .                                                                                                                                                                                          
RUN npm install                                                                                                                                                                                          
# RUN npm install react-scripts@3.4.1 -g --silent                                                                                                                                                                 
COPY . .                                                                                                                                                                                                         
RUN npm run build                                                                                                                                                                                          
                                                                                                                                                                                                                  
FROM nginx:alpine
#COPY default.conf /etc/nginx/conf.d/
#COPY nginx.conf /etc/nginx/
#RUN chown -R nginx:nginx /var/cache/nginx /etc/nginx/
#USER nginx 
COPY --from=react-built /app/dist/ng6-quiz/ /usr/share/nginx/html
RUN ls -l 
