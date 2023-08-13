-- 1
SELECT compositor, id FROM musicas;

-- 2
SELECT composicao, tempo FROM musicas WHERE tempo > 4;

-- 3
SELECT compositor, composicao FROM musicas WHERE id BETWEEN 47 AND 123;

-- 4
SELECT * FROM musicas WHERE compositor IS NOT NULL AND tempo < 5 AND compositor <> 'Bach';

-- 5
SELECT composicao, tempo FROM musicas WHERE compositor IN ('Mozart', 'Bach');

-- 6
SELECT * FROM musicas ORDER BY id DESC;

-- 7
SELECT * FROM musicas ORDER BY tempo;

-- 8
SELECT * FROM musicas ORDER BY tempo LIMIT 5;

-- 9
SELECT * FROM musicas ORDER BY tempo DESC LIMIT 10;

-- 10
SELECT * FROM musicas WHERE id NOT IN (SELECT id FROM musicas ORDER BY tempo LIMIT 5) ORDER BY tempo LIMIT 10;

-- 11
SELECT * FROM musicas ORDER BY id LIMIT 30 OFFSET 30;

-- 12
SELECT * FROM musicas ORDER BY id LIMIT 72 OFFSET 60;

-- 13
SELECT DISTINCT compositor FROM musicas WHERE compositor IS NOT NULL;

-- 14
SELECT DISTINCT compositor, composicao FROM musicas;

-- 15
SELECT * FROM musicas WHERE UPPER(compositor) LIKE 'BRA%';

-- 16
SELECT * FROM musicas WHERE ritmo LIKE '% troppo';

-- 17
SELECT * FROM musicas WHERE UPPER(composicao) LIKE '%QUARTET%';

-- 18
SELECT * FROM musicas WHERE UPPER(composicao) NOT LIKE '%QUINTET%';

