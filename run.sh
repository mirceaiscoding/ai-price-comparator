#!/bin/bash
nohup python -u run.py \
    --test_file ./data/tasks_test.jsonl \
    --api_key SECRET_XXXXXXXX_KEY \
    --max_iter 8 \
    --temperature 1 \
    --seed 42 > test_tasks.log &
