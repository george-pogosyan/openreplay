#!/bin/sh
export ASSIST_KEY=ignore
sh env_vars.sh
source /tmp/.env.override
uvicorn app:app --host 0.0.0.0 --port $LISTEN_PORT --reload
