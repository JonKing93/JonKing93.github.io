"""Updates the resume metadata so that - when the resume.pdf is 
opened in a web browser - the tab has a nice title"""

from pathlib import Path
from pypdf import PdfWriter

resume = Path("public") / "resume.pdf"
writer = PdfWriter(clone_from=resume)
writer.add_metadata({"/Title": "Resume - Jonathan King"})

with open(resume, 'wb') as file:
    writer.write(file)
