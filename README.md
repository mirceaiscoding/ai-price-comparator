# PRICE COMPARATOR

Vezi readme-ul initial. trebuie instalat conda, selenium, etc

```
streamlit run run.py -- \
    --test_file ./data/tasks_test.jsonl \
    --api_key SECRET_XXXXXXXX_KEY \
    --max_iter 8 \
    --temperature 1 \
    --seed 42 > test_tasks.log
```

### TODO

- [ ] UI Input pentru nume produs
- [ ] UI lista site-uri pe care sa caute (punem un default si sa poata sa schimbe userul)
- [ ] UI output lista preturi <img width="1174" alt="Pasted Graphic" src="https://github.com/user-attachments/assets/9a9259e1-701b-483f-ab88-9ce5bd00e5a3" />
- [ ] Am putea la final cand da raspunsul sa punem in json si linkul de unde a extras raspunsul
- [ ] Sa facem un prompt mai bun fix pentru gasirea preturilor
- [ ] nu cred ca e nevoie de multi-tab, putem sa facem un task pentru fiecare website
- [ ] puncte forte / puncte slabe ale lucrarii initiale!
- [ ] punctele forte: merge bine, e bine scrisa si usor de inteles.
- [ ] puncte slabe: nu are ui si e outdated codul! a trebuit sa schimbam noi codul
