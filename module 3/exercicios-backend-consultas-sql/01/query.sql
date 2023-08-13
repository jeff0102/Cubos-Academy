-- 1
SELECT * FROM musicas;

-- 3
SELECT compositor, composicao FROM musicas WHERE id BETWEEN 47 AND 123;

-- 5
SELECT composicao, tempo FROM musicas WHERE compositor IN ('Mozart', 'Bach');

-- 6
SELECT * FROM musicas ORDER BY id DESC;

-- 13
SELECT DISTINCT compositor FROM musicas WHERE compositor IS NOT NULL;

-- 14
SELECT DISTINCT compositor, composicao FROM musicas;

-- 15
SELECT * FROM musicas WHERE compositor LIKE 'Bra%';

-- 16
SELECT * FROM musicas WHERE ritmo LIKE '% troppo';

-- 17
SELECT * FROM musicas WHERE composicao ILIKE '%quartet%';

-- 18
SELECT * FROM musicas WHERE composicao NOT ILIKE '%quintet%';
