#!/bin/bash
cd /home/kavia/workspace/code-generation/ui-library-1794-1809/react_tailwind_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

