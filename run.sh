#!/bin/bash
nohup python -u run.py \
    --test_file ./data/tasks_test.jsonl \
    --api_key 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 \
    --headless \
    --max_iter 15 \
    --max_attached_imgs 3 \
    --temperature 1 \
    --fix_box_color \
    --seed 42 > test_tasks.log &
