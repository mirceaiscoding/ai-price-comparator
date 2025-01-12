set -a
source .env
set +a

streamlit run run.py -- \
    --test_file ./data/tasks_test.jsonl \
    --api_key "$OPENAI_API_KEY" \
    --max_iter 8 \
    --temperature 1 \
    --seed 42 > test_tasks.log
