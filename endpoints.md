| Method  | Endpoint  | Body  | Response|
|---|---|---|---|
| GET  | https://cogip-api.pierre-mauriello.be/invoices  |   | List of every invoices stored in db  |
| GET  | https://cogip-api.pierre-mauriello.be/invoices/{id}   |    | One specific invoice   |
| GET  | https://cogip-api.pierre-mauriello.be/companies |   | List of every companies stored in db  |
| GET  | https://cogip-api.pierre-mauriello.be/companies/{id} |  | One specific company |
| GET  | https://cogip-api.pierre-mauriello.be/contacts |    | List of every contacts stored in db |
| GET  | https://cogip-api.pierre-mauriello.be/contacts/{id} |  | One specific contact |
| POST | https://cogip-api.pierre-mauriello.be/invoices | { company_id (integer), created_at (date, format Y-m-d H:i:s), updated_at (date, format Y-m-d H:i:s) } | Sucess message |
| POST | https://cogip-api.pierre-mauriello.be/companies | { name, type_id (1 or 2 - buyer or supplier), country, vat number (string), created_at (date, format Y-m-d H:i:s), updated_at (date, format Y-m-d H:i:s) } | Sucess message |
| POST | https://cogip-api.pierre-mauriello.be/contacts | { name, company_id (ID of the contact's company), email, phone (+XX ...), created_at (date, format Y-m-d H:i:s), updated_at (date, format Y-m-d H:i:s) } | Success message | 
| PUT  | https://cogip-api.pierre-mauriello.be/invoices/{id} | { id (in case we want to touch it, otherwise just leave it as it is), company_id, updated_at (date, format Y-m-d H:i:s) } | Success message | 
| PUT  | https://cogip-api.pierre-mauriello.be/companies/{id} | { name, type_id (1 or 2 - buyer or supplier), country, vat number (string), created_at (date, format Y-m-d H:i:s), updated_at (date, format Y-m-d H:i:s) } | Success message | 
| PUT  | https://cogip-api.pierre-mauriello.be/contacts/{id} | { name, company_id (ID of the contact's company), email, phone (+XX ...), updated_at (date, format Y-m-d H:i:s) } | Success message |
| DELETE | https://cogip-api.pierre-mauriello.be/invoices/{id}  |   | Success message  |
| DELETE | https://cogip-api.pierre-mauriello.be/companies/{id} |   | Success message  |
| DELETE | https://cogip-api.pierre-mauriello.be/invoices/{id}   |   | Success message  |
