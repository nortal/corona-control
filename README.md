# Corona Control

We give the Situation Room up-to-date information about the situation on the ground so the people in there are able to focus their resources and gain back control over the virus outbreak.

https://devpost.com/software/corona-control

### Link to test installation

 https://master-7rqtwti-yxrl76jeb7geo.de-2.platformsh.site/
 
### Installation

1. Clone Repository
2. `yarn install`
3. Configure access to Elasticsearch in `.env` file and `package.json` (for CORS-proxy)
4. `yarn proxy`
5. `yarn start`