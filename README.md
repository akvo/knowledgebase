# Akvo Knowledgebase

This is where the user documentation of [Akvo] resides.

# Contributing

It's possible to just edit the files in [docs/](docs/) if you're just making simple content changes.

To have a preview and check that everything is alright, you will need to setup a development environment.

 - Install python3
 - Create and activate a virtual environment
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```
 - Install requirements
   `pip install -r requirements.txt`
 - Start development server
   `mkdocs serve`
 - Navigate to local server http://localhost:8000

**Production has additional configuration in `mkdocs.prod.yml`**  
You can use `mkdocs serve -f mkdocs.prod.yml` to see what it'll look like.

[Akvo]: https://akvo.org
