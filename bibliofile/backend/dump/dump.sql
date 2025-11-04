CREATE DATABASE bibliofile;
USE bibliofile;

CREATE TABLE reader(
	id_reader INT PRIMARY KEY AUTO_INCREMENT,
    reader_name VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    reader_password VARCHAR(255) NOT NULL
);

CREATE TABLE book(
	id_book INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    category ENUM(
    'Romance',
    'Ficção Científica',
    'Fantasia',
    'Distopia',
    'Aventura',
    'Mistério',
    'Suspense',
    'Terror',
    'Drama',
    'Comédia',
    'Fábula',
    'Conto',
    'Poesia',
    'Biografia',
    'Autobiografia',
    'Memórias',
    'História',
    'Filosofia',
    'Religião',
    'Espiritualidade',
    'Autoajuda',
    'Psicologia',
    'Ciência',
    'Tecnologia',
    'Educação',
    'Política',
    'Economia',
    'Sociologia',
    'Arte',
    'Música',
    'Fotografia',
    'Infantil',
    'Juvenil',
    'Didático',
    'Erótico',
    'Crônica',
    'Humor',
    'Clássico',
    'Esportes',
    'Saúde',
    'Culinária'),
    pagines BIGINT,
    read_time BIGINT,
    note ENUM('1', '2', '3', '4', '5'),
    review VARCHAR(255)
);

CREATE TABLE recommend(
	id_recommend INT PRIMARY KEY AUTO_INCREMENT,
    reader_id INT,
    FOREIGN KEY (reader_id)
    REFERENCES reader(id_reader),
    book_id INT,
    FOREIGN KEY (book_id)
    REFERENCES book(id_book)
);

CREATE TABLE discuss(
	id_discuss INT PRIMARY KEY AUTO_INCREMENT,
    commentary VARCHAR(255) NOT NULL,
    reader_id INT,
    FOREIGN KEY (reader_id)
    REFERENCES reader(id_reader),
    book_id INT,
    FOREIGN KEY (book_id)
    REFERENCES book(id_book)
);

-- Garantindo que estamos usando o banco certo
USE bibliofile;

-- ======================
-- Tabela: reader
-- ======================
INSERT INTO reader (reader_name, email, reader_password)
VALUES
('Ana Souza', 'ana.souza@email.com', 'senha123'),
('Carlos Mendes', 'carlos.mendes@email.com', 'abc123'),
('Juliana Lima', 'juliana.lima@email.com', 'pass456'),
('Pedro Alves', 'pedro.alves@email.com', 'qwerty'),
('Marina Costa', 'marina.costa@email.com', 'senha789');

-- ======================
-- Tabela: book
-- ======================
INSERT INTO book (title, author, category, pagines, read_time, note, review)
VALUES
('Orgulho e Preconceito', 'Jane Austen', 'Romance', 432, 12, '5', 'Um clássico imperdível!'),
('1984', 'George Orwell', 'Distopia', 328, 10, '5', 'Perturbador e genial.'),
('O Hobbit', 'J.R.R. Tolkien', 'Fantasia', 310, 9, '5', 'Uma aventura inesquecível.'),
('A Menina que Roubava Livros', 'Markus Zusak', 'Drama', 480, 14, '4', 'Lindo e triste ao mesmo tempo.'),
('Dom Casmurro', 'Machado de Assis', 'Clássico', 256, 8, '4', 'Uma obra-prima da literatura brasileira.'),
('It - A Coisa', 'Stephen King', 'Terror', 1100, 25, '5', 'Assustador e envolvente.'),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Fábula', 96, 3, '5', 'Simples, mas profundamente filosófico.'),
('A Arte da Guerra', 'Sun Tzu', 'Filosofia', 150, 4, '4', 'Aplicável até hoje em muitas áreas.'),
('O Poder do Hábito', 'Charles Duhigg', 'Autoajuda', 408, 11, '4', 'Transformador para o dia a dia.'),
('Sapiens: Uma Breve História da Humanidade', 'Yuval Noah Harari', 'História', 498, 15, '5', 'Brilhante e provocador.');

-- ======================
-- Tabela: recommend
-- ======================
INSERT INTO recommend (reader_id, book_id)
VALUES
(1, 1),
(1, 3),
(2, 2),
(2, 6),
(3, 4),
(3, 10),
(4, 5),
(5, 7),
(5, 9);

-- ======================
-- Tabela: discuss
-- ======================
INSERT INTO discuss (commentary, reader_id, book_id)
VALUES
('Adorei a história, personagens muito bem construídos!', 1, 1),
('Esse final me deixou pensando por dias!', 2, 2),
('Tolkien é simplesmente genial.', 3, 3),
('Chorei horrores com esse livro.', 3, 4),
('Bentinho era mesmo ciumento demais!', 4, 5),
('Nunca mais olhei palhaços do mesmo jeito.', 2, 6),
('Toda vez que leio, aprendo algo novo.', 5, 7),
('Muito estratégico, dá pra aplicar até em negócios.', 5, 8),
('Excelente leitura para entender o comportamento humano.', 5, 9),
('Harari muda nossa forma de ver o mundo.', 3, 10);
