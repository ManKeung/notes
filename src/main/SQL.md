[TOC]

* * *

# [SQL](http://www.w3school.com.cn/sql/index.asp)

## SQL基础教程

### 简介

1. 什么是SQL？
  - SQL 指结构化查询语言
  - SQL 使我们有能力访问数据库
  - SQL 是一种 ANSI 的标准计算机语言
  - 注：ANSI，美国国家标准化组织

2. 能做什么？
  - SQL 面向数据库执行查询
  - SQL 可从数据库取回数据
  - SQL 可在数据库中插入新的记录
  - SQL 可更新数据库中的数据
  - SQL 可从数据库删除记录
  - SQL 可创建新数据库
  - SQL 可在数据库中创建新表
  - SQL 可在数据库中创建存储过程
  - SQL 可在数据库中创建视图
  - SQL 可以设置表、存储过程和视图的权限

### 语法

+ 数据库表 Persons

Id | LastName | FirstName | Address | City
---- | ---- | ---- | ---- | ----
1 | Adams | John | Oxford Street | London
2 | Bush  | George | Fifth Avenue | New York
3 | Carter  | Thomas | Changan Street | Beijing

+ SQL语句
  - SELECT Lastname FROM Persons

+ 结果

| Lastname |
| ---- |
| Adams |
| Bush |
| Carter |

> 一定记住，SQL对大小写不明感，所以一般SQL语句全大写便于区别表和字段等

+ SQL中重要的 DDL 语句
  - CREATE DATABASE - 创建新数据库
  - ALTER DATABASE - 修改数据库
  - CREATE TABLE - 创建新表
  - ALTER TABLE - 变更（改变）数据库表
  - DROP TABLE - 删除表
  - CREATE INDEX - 创建索引（搜索键）
  - DROP INDEX - 删除索引

### select

+ 语法
  - SELECT 列名称 FROM 表名字 / SELECT * FROM 表名字
  - SELECT Lastname,FirstName FROM Persons

### distinct

在表中，可能会包含重复值。这并不成问题，不过，有时您也许希望仅仅列出不同（distinct）的值。
关键词 DISTINCT 用于返回唯一不同的值。

+ 语法
  - SELECT DISTINCT 列名称 FROM 表名称

### where

如需有条件地从表中选取数据，可将 WHERE 子句添加到 SELECT 语句。

+ 语法
  - SELECT 列名称 FROM 表名称 WHERE 列 运算符 值

+ 运算符

操作符 | 描述
---- | ----
= | 等于
<> | 不等于
\> | 大于
< | 小于
\>= | 大于等于
<=  | 小于等于
BETWEEN | 在某个范围内
LIKE | 搜索某种模式

> 在某些版本的 SQL 中，操作符 <> 可以写为 !=。

+ 例子
  - SELECT * FROM Persons WHERE City='Beijing'

> 请注意，我们在例子中的条件值周围使用的是单引号。SQL 使用单引号来环绕文本值（大部分数据库系统也接受双引号）。如果是数值，请不要使用引号。

### and & or

+ AND
  - 使用 AND 来显示所有姓为 "Carter" 并且名为 "Thomas" 的人
  - SELECT * FROM Persons WHERE FirstName='Thomas' AND LastName='Carter'

+ OR
  - 使用 OR 来显示所有姓为 "Carter" 或者名为 "Thomas" 的人
  - SELECT * FROM Persons WHERE firstname='Thomas' OR lastname='Carter'

+ 结合 AND 和 OR 运算符
  - 我们也可以把 AND 和 OR 结合起来（使用圆括号来组成复杂的表达式
  - SELECT * FROM Persons WHERE (FirstName='Thomas' OR FirstName='William') AND LastName='Carter'

### order by

ORDER BY 语句用于根据指定的列对结果集进行排序。
ORDER BY 语句默认按照升序对记录进行排序。
如果您希望按照降序对记录进行排序，可以使用 DESC 关键字。

+ 语法
  - SELECT 列名称 FROM 表名称 ORDER BY 列名称 // 升序
  - SELECT 列名称 FROM 表名称 ORDER BY 列名称 DESC // 降序
  - SELECT Company, OrderNumber FROM Orders ORDER BY Company

### insert into

INSERT INTO 语句用于向表格中插入新的行。

+ 语法
  - INSERT INTO 表名称 VALUES (值1, 值2,....)

+ 指定所要插入数据的列
  - INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)

### update

Update 语句用于修改表中的数据

+ 语法
  - UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值

+ 我们为 lastname 是 "Wilson" 的人添加 firstname
  - UPDATE Person SET FirstName = 'Fred' WHERE LastName = 'Wilson'

+ 修改地址（address），并添加城市名称（city）
  - UPDATE Person SET Address = 'Zhongshan 23', City = 'Nanjing' WHERE LastName = 'Wilson'

### delete

DELETE 语句用于删除表中的行。

+ 语法
  - DELETE FROM 表名称 WHERE 列名称 = 值

## SQL高级教程

### top

TOP 子句用于规定要返回的记录的数目。
对于拥有数千条记录的大型表来说，TOP 子句是非常有用的。

> 注释：并非所有的数据库系统都支持 TOP 子句。

+ 语法
  - SELECT TOP number|percent column_name(s) FROM table_name

+ 取头两条记录
  - SELECT TOP 2 * FROM Persons

+ 表中选取 50% 的记录
  - ELECT TOP 50 PERCENT * FROM Persons

### like

LIKE 操作符用于在 WHERE 子句中搜索列中的指定模式

+ 语法
  - SELECT column_name(s) FROM table_name WHERE column_name LIKE pattern

+ 例子
  1. SELECT * FROM Persons WHERE City LIKE 'N%' // 选取居住在以 "N" 开始的城市里的人 提示 "%" 可用于定义通配符（模式中缺少的字母）
  2. SELECT * FROM Persons WHERE City LIKE '%g' // 居住在以 "g" 结尾的城市里的人
  3. SELECT * FROM Persons WHERE City LIKE '%lon%' // 选取居住在包含 "lon" 的城市里的人
  4. SELECT * FROM Persons WHERE City NOT LIKE '%lon%' // 居住在不包含 "lon" 的城市里的人

### 通配符

通配符 | 描述
---- | ----
% | 替代一个或多个字符
_ | 仅替代一个字符
[charlist] | 字符列中的任何单一字符
[^charlist] 或者 [!charlist] | 在字符列中的任何单一字符

### in

IN 操作符允许我们在 WHERE 子句中规定多个值。

+ 语法
  - SELECT column_name(s) FROM table_name WHERE column_name IN (value1,value2,...)

### between

操作符 BETWEEN ... AND 会选取介于两个值之间的数据范围。这些值可以是数值、文本或者日期

+ 语法
  - SELECT column_name(s) FROM table_name WHERE column_name BETWEEN value1 AND value2

+ 以字母顺序显示介于 "Adams"（包括）和 "Carter"（不包括）之间的人，请使用下面的 SQL中重要的
  - SELECT * FROM Persons WHERE LastName BETWEEN 'Adams' AND 'Carter'

> 重要事项：不同的数据库对 BETWEEN...AND 操作符的处理方式是有差异的。某些数据库会列出介于 "Adams" 和 "Carter" 之间的人，但不包括 "Adams" 和 "Carter" ；某些数据库会列出介于 "Adams" 和 "Carter" 之间并包括 "Adams" 和 "Carter" 的人；而另一些数据库会列出介于 "Adams" 和 "Carter" 之间的人，包括 "Adams" ，但不包括 "Carter" 。
所以，请检查你的数据库是如何处理 BETWEEN....AND 操作符的！

+ 使用上面的例子显示范围之外的人，请使用 NOT 操作符
  - SELECT * FROM Persons WHERE LastName NOT BETWEEN 'Adams' AND 'Carter'

### aliases

通过使用 SQL，可以为列名称和表名称指定别名（Alias）

+ 表的 SQL Alias 语法
  - SELECT column_name(s) FROM table_name AS alias_name

+ 列的 SQL Alias 语法
  - SELECT column_name AS alias_name FROM table_name

+ 例子
  - SELECT LastName AS Family, FirstName AS Name FROM Persons

### join

join 用于根据两个或多个表中的列之间的关系，从这些表中查询数据

Join 和 Key
有时为了得到完整的结果，我们需要从两个或更多的表中获取结果。我们就需要执行 join。
数据库中的表可通过键将彼此联系起来。主键（Primary Key）是一个列，在这个列中的每一行的值都是唯一的。在表中，每个主键的值都是唯一的。这样做的目的是在不重复每个表中的所有数据的情况下，把表间的数据交叉捆绑在一起。

+ Persons表

Id_P | LastName | FirstName | Address | City
---- | ---- | ---- | ---- | ----
1 | Adams | John | Oxford Street | London
2 | Bush | George | Fifth Avenue | New York
3 | Carter | Thomas | Changan Street | Beijing

+ Orders表

Id_O | OrderNo | Id_P
1 | 77895 | 3
2 | 44678 | 3
3 | 22456 | 1
4 | 24562 | 1
5 | 34764 | 65

1. 引用两个表
  + SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo FROM Persons, Orders WHERE Persons.Id_P = Orders.Id_P

2. 使用 Join
  + SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo FROM Persons
INNER JOIN Orders ON Persons.Id_P = Orders.Id_P ORDER BY Persons.LastName

+ 不同的 SQL JOIN
  - JOIN: 如果表中有至少一个匹配，则返回行
  - LEFT JOIN: 即使右表中没有匹配，也从左表返回所有的行
  - RIGHT JOIN: 即使左表中没有匹配，也从右表返回所有的行
  - FULL JOIN: 只要其中一个表中存在匹配，就返回行

#### inner join

在表中存在至少一个匹配时，INNER JOIN 关键字返回行

+ 语法
  - SELECT column_name(s) FROM table_name1 INNER JOIN table_name2 ON table_name1.column_name=table_name2.column_name

> 注释：INNER JOIN 与 JOIN 是相同的

+ 例子
  - SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo FROM Persons INNER JOIN Orders ON Persons.Id_P=Orders.Id_P ORDER BY Persons.LastName

#### left join

LEFT JOIN 关键字会从左表 (table_name1) 那里返回所有的行，即使在右表 (table_name2) 中没有匹配的行

+ 语法
  - SELECT column_name(s) FROM table_name1 LEFT JOIN table_name2 ON table_name1.column_name=table_name2.column_name

> 注释：在某些数据库中， LEFT JOIN 称为 LEFT OUTER JOIN

+ 例子
  - SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo FROM Persons LEFT JOIN Orders ON Persons.Id_P=Orders.Id_P ORDER BY Persons.LastName

#### right join

RIGHT JOIN 关键字会右表 (table_name2) 那里返回所有的行，即使在左表 (table_name1) 中没有匹配的行

+ 语法
  - SELECT column_name(s) FROM table_name1 RIGHT JOIN table_name2 ON table_name1.column_name=table_name2.column_name

> 注释：在某些数据库中， RIGHT JOIN 称为 RIGHT OUTER JOIN

+ 例子
  - SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo FROM Persons
RIGHT JOIN Orders ON Persons.Id_P=Orders.Id_P ORDER BY Persons.LastName

#### full join

只要其中某个表存在匹配，FULL JOIN 关键字就会返回行

+ 语法
  - SELECT column_name(s) FROM table_name1 FULL JOIN table_name2 ON table_name1.column_name=table_name2.column_name

> 注释：在某些数据库中， FULL JOIN 称为 FULL OUTER JOIN

+ 例子
  - SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo FROM Persons FULL JOIN Orders ON Persons.Id_P=Orders.Id_P ORDER BY Persons.LastName

### union

UNION 操作符用于合并两个或多个 SELECT 语句的结果集。

请注意，UNION 内部的 SELECT 语句必须拥有相同数量的列。列也必须拥有相似的数据类型。同时，每条 SELECT 语句中的列的顺序必须相同。

+ 语法
  - SELECT column_name(s) FROM table_name1 UNION SELECT column_name(s) FROM table_name2
  - SELECT column_name(s) FROM table_name1 UNION ALL SELECT column_name(s) FROM table_name2

> 注释：默认地，UNION 操作符选取不同的值。如果允许重复的值，请使用 UNION ALL

### select into

+ 语法
  1. 您可以把所有的列插入新表
    - SELECT * INTO new_table_name [IN externaldatabase] FROM old_tablename
  2. 或者只把希望的列插入新表
    - SELECT column_name(s) INTO new_table_name [IN externaldatabase] FROM old_tablename

+ 例子
  1. 制作 "Persons" 表的备份复件
    - SELECT * INTO Persons_backup FROM Persons
  2. IN 子句可用于向另一个数据库中拷贝表
    - SELECT * INTO Persons IN 'Backup.mdb' FROM Persons
  3. 拷贝某些域，可以在 SELECT 语句后列出这些域
    - SELECT LastName,FirstName INTO Persons_backup FROM Persons

### create DB

CREATE DATABASE 用于创建数据库

+ 语法
  - CREATE DATABASE database_name

### create Table

CREATE TABLE 语句用于创建数据库中的表

+ 语法
  - CREATE TABLE 表名称
(
列名称1 数据类型,
列名称2 数据类型,
列名称3 数据类型,
....
)

+ 数据类型（data_type）

数据类型 | 描述
---- | ----
integer(size) int(size) smallint(size) tinyint(size) |仅容纳整数。在括号内规定数字的最大位数。
decimal(size,d) numeric(size,d) | 容纳带有小数的数字。"size" 规定数字的最大位数。"d" 规定小数点右侧的最大位数。
char(size) | 容纳固定长度的字符串（可容纳字母、数字以及特殊字符）。在括号中规定字符串的长度。
varchar(size) | 容纳可变长度的字符串（可容纳字母、数字以及特殊的字符）。在括号中规定字符串的最大长度。
date(yyyymmdd) | 容纳日期。

### constraints

约束用于限制加入表的数据的类型

+ NOT NULL
+ UNIQUE
+ PRIMARY KEY
+ FOREIGN KEY
+ CHECK
+ DEFAULT

#### not null

NOT NULL 约束强制列不接受 NULL 值

+ 语句
  - CREATE TABLE Persons
(
Id_P int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255)
)

#### unique

UNIQUE 约束唯一标识数据库表中的每条记录。
UNIQUE 和 PRIMARY KEY 约束均为列或列集合提供了唯一性的保证。
PRIMARY KEY 拥有自动定义的 UNIQUE 约束。
请注意，每个表可以有多个 UNIQUE 约束，但是每个表只能有一个 PRIMARY KEY 约束。

+ 语法
  1. MySQL
    - CREATE TABLE Persons
(
Id_P int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
UNIQUE (Id_P)
)
  2. SQL Server / Oracle / MS Access
    - CREATE TABLE Persons
(
Id_P int NOT NULL UNIQUE,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255)
)
  3. MySQL / SQL Server / Oracle / MS Access 如果需要命名 UNIQUE 约束，以及为多个列定义 UNIQUE 约束，请使用下面的 SQL 语法
    - CREATE TABLE Persons
(
Id_P int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
CONSTRAINT uc_PersonID UNIQUE (Id_P,LastName)
)
  4. 当表已被创建时，如需在 "Id_P" 列创建 UNIQUE 约束，请使用下列 SQL MySQL / SQL Server / Oracle / MS Access
    - ALTER TABLE Persons ADD UNIQUE (Id_P)
  5. 如需命名 UNIQUE 约束，并定义多个列的 UNIQUE 约束，请使用下面的 SQL 语法 MySQL / SQL Server / Oracle / MS Access
    - ALTER TABLE Persons
ADD CONSTRAINT uc_PersonID UNIQUE (Id_P,LastName)

+ 撤销UNIQUE约束
  1. MySQL
    - ALTER TABLE Persons DROP INDEX uc_PersonID
  2. SQL Server / Oracle / MS Access
    - ALTER TABLE Persons DROP CONSTRAINT uc_PersonID

#### primary key

PRIMARY KEY 约束唯一标识数据库表中的每条记录。
主键必须包含唯一的值。
主键列不能包含 NULL 值。
每个表都应该有一个主键，并且每个表只能有一个主键

+ 语法
  1. MySQL
    - CREATE TABLE Persons
(
Id_P int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
PRIMARY KEY (Id_P)
)
  2. SQL Server / Oracle / MS Access
    - CREATE TABLE Persons
(
Id_P int NOT NULL PRIMARY KEY,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255)
)
  3. 如果需要命名 PRIMARY KEY 约束，以及为多个列定义 PRIMARY KEY 约束，请使用下面的 SQL 语法 MySQL / SQL Server / Oracle / MS Access
    - CREATE TABLE Persons
(
Id_P int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
CONSTRAINT pk_PersonID PRIMARY KEY (Id_P,LastName)
)
  4. MySQL / SQL Server / Oracle / MS Access 表已存在的情况
    - ALTER TABLE Persons ADD PRIMARY KEY (Id_P)
    - ALTER TABLE Persons ADD CONSTRAINT pk_PersonID PRIMARY KEY (Id_P,LastName)

+ 撤销 PRIMARY KEY 约束
  1. MySQL
    - ALTER TABLE Persons DROP PRIMARY KEY
  2. SQL Server / Oracle / MS Access
    - ALTER TABLE Persons DROP CONSTRAINT pk_PersonID

#### foreign key

一个表中的 FOREIGN KEY 指向另一个表中的 PRIMARY KEY

+ SQL 在 "Orders" 表创建时为 "Id_P" 列创建 FOREIGN KEY
  1. MySQL
    - CREATE TABLE Orders
(
Id_O int NOT NULL,
OrderNo int NOT NULL,
Id_P int,
PRIMARY KEY (Id_O),
FOREIGN KEY (Id_P) REFERENCES Persons(Id_P)
)
  2. SQL Server / Oracle / MS Access
    - CREATE TABLE Orders
(
Id_O int NOT NULL PRIMARY KEY,
OrderNo int NOT NULL,
Id_P int FOREIGN KEY REFERENCES Persons(Id_P)
)
  3. 需要命名 FOREIGN KEY 约束，以及为多个列定义 FOREIGN KEY 约束，请使用下面的 SQL 语法
    - CREATE TABLE Orders
(
Id_O int NOT NULL,
OrderNo int NOT NULL,
Id_P int,
PRIMARY KEY (Id_O),
CONSTRAINT fk_PerOrders FOREIGN KEY (Id_P)
REFERENCES Persons(Id_P)
)

+ 如果在 "Orders" 表已存在的情况下为 "Id_P" 列创建 FOREIGN KEY 约束，请使用下面的 SQL
  1. MySQL / SQL Server / Oracle / MS Access
    - ALTER TABLE Orders ADD FOREIGN KEY (Id_P) REFERENCES Persons(Id_P)
  2. 需要命名 FOREIGN KEY 约束，以及为多个列定义 FOREIGN KEY 约束，请使用下面的 SQL 语法
    - ALTER TABLE Orders ADD CONSTRAINT fk_PerOrders FOREIGN KEY (Id_P) REFERENCES Persons(Id_P)

+ 撤销 FOREIGN KEY 约束
  1. MySQL
    - ALTER TABLE Orders DROP FOREIGN KEY fk_PerOrders
  2. SQL Server / Oracle / MS Access
    - ALTER TABLE Orders DROP CONSTRAINT fk_PerOrders

#### check

CHECK 约束用于限制列中的值的范围。
如果对单个列定义 CHECK 约束，那么该列只允许特定的值。
如果对一个表定义 CHECK 约束，那么此约束会在特定的列中对值进行限制。

+ 下面的 SQL 在 "Persons" 表创建时为 "Id_P" 列创建 CHECK 约束。CHECK 约束规定 "Id_P" 列必须只包含大于 0 的整数
  1. MySQL
    - CREATE TABLE Persons
(
Id_P int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
CHECK (Id_P>0)
)
  2. SQL Server / Oracle / MS Access
    - CREATE TABLE Persons
(
Id_P int NOT NULL CHECK (Id_P>0),
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255)
)
  3. 需要命名 CHECK 约束，以及为多个列定义 CHECK 约束，请使用下面的 SQL 语法
    - CREATE TABLE Persons
(
Id_P int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
CONSTRAINT chk_Person CHECK (Id_P>0 AND City='Sandnes')
)

+ 表已存在的情况下为 "Id_P" 列创建 CHECK 约束，请使用下面的 SQL
  1. MySQL / SQL Server / Oracle / MS Access
    - ALTER TABLE Persons ADD CHECK (Id_P>0)
  2. 需要命名 CHECK 约束，以及为多个列定义 CHECK 约束，请使用下面的 SQL 语法
    - ALTER TABLE Persons ADD CONSTRAINT chk_Person CHECK (Id_P>0 AND City='Sandnes')

+ 撤销 CHECK 约束
  1. SQL Server / Oracle / MS Access
    - ALTER TABLE Persons DROP CONSTRAINT chk_Person
  2. MySQL
    - ALTER TABLE Persons DROP CHECK chk_Person

#### default

DEFAULT 约束用于向列中插入默认值。
如果没有规定其他的值，那么会将默认值添加到所有的新记录。

+ 在 "Persons" 表创建时为 "City" 列创建 DEFAULT 约束
  1. My SQL / SQL Server / Oracle / MS Access
    - CREATE TABLE Persons
(
Id_P int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255) DEFAULT 'Sandnes'
)
  2. 通过使用类似 GETDATE() 这样的函数，DEFAULT 约束也可以用于插入系统值
    - CREATE TABLE Orders
(
Id_O int NOT NULL,
OrderNo int NOT NULL,
Id_P int,
OrderDate date DEFAULT GETDATE()
)

+ 表已存在的情况下为 "City" 列创建 DEFAULT 约束，请使用下面的 SQL
  1. MySQL
    - ALTER TABLE Persons ALTER City SET DEFAULT 'SANDNES'
  2. SQL Server / Oracle / MS Access
    - ALTER TABLE Persons ALTER COLUMN City SET DEFAULT 'SANDNES'

+ 撤销 DEFAULT 约束
  1. MySQL
    - ALTER TABLE Persons ALTER City DROP DEFAULT
  2. SQL Server / Oracle / MS Access
    - ALTER TABLE Persons ALTER COLUMN City DROP DEFAULT

### create index

CREATE INDEX 语句用于在表中创建索引。
在不读取整个表的情况下，索引使数据库应用程序可以更快地查找数据。

索引
您可以在表中创建索引，以便更加快速高效地查询数据。
用户无法看到索引，它们只能被用来加速搜索/查询。

> 注释：更新一个包含索引的表需要比更新一个没有索引的表更多的时间，这是由于索引本身也需要更新。因此，理想的做法是仅仅在常常被搜索的列（以及表）上面创建索引。

+ CREATE INDEX 语法
  - CREATE INDEX index_name ON table_name (column_name) // 创建一个简单的索引。允许使用重复的值

> 注释："column_name" 规定需要索引的列

+ CREATE UNIQUE INDEX 语法
  - CREATE UNIQUE INDEX index_name ON table_name (column_name) // 创建一个唯一的索引。唯一的索引意味着两个行不能拥有相同的索引值

+ 实例
  1. 创建一个简单的索引，名为 "PersonIndex"，在 Person 表的 LastName 列
    - CREATE INDEX PersonIndex ON Person (LastName)
  2. 序索引某个列中的值，您可以在列名称之后添加保留字 DESC
    - CREATE INDEX PersonIndex ON Person (LastName DESC)
  3. 索引不止一个列，您可以在括号中列出这些列的名称，用逗号隔开
    - CREATE INDEX PersonIndex ON Person (LastName, FirstName)

### drop

DROP 语句，可以轻松地删除索引、表和数据库

+ DROP INDEX 语句
  1. 用于 Microsoft SQLJet (以及 Microsoft Access) 的语法
    - DROP INDEX index_name ON table_name
  2. 用于 MS SQL Server 的语法
    - DROP INDEX table_name.index_name
  3. 用于 IBM DB2 和 Oracle 语法
    - DROP INDEX index_name
  4. 用于 MySQL 的语法
    - ALTER TABLE table_name DROP INDEX index_name

+ DROP TABLE 语句
  1. DROP TABLE 语句用于删除表（表的结构、属性以及索引也会被删除）
    - DROP TABLE 表名称

+ SQL DROP DATABASE 语句
  1. DROP DATABASE 语句用于删除数据库
    - DROP DATABASE 数据库名称

+ TRUNCATE TABLE 语句
  1. 如果我们仅仅需要除去表内的数据，但并不删除表本身，那么我们该如何做呢？请使用 TRUNCATE TABLE 命令（仅仅删除表格中的数据）
    - TRUNCATE TABLE 表名称

### alter

ALTER TABLE 语句用于在已有的表中添加、修改或删除列

+ ALTER TABLE 语法
  1. 表中添加列，请使用下列语法
    - ALTER TABLE table_name ADD column_name datatype
  2. 删除表中的列，请使用下列语法
    - ALTER TABLE table_name DROP COLUMN column_name

> 注释：某些数据库系统不允许这种在数据库表中删除列的方式 (DROP COLUMN column_name)

  3. 改变表中列的数据类型，请使用下列语法
    - ALTER TABLE table_name ALTER COLUMN column_name datatype

### increment

AUTO INCREMENT 字段
我们通常希望在每次插入新记录时，自动地创建主键字段的值。
我们可以在表中创建一个 auto-increment 字段。

+ 用于 MySQL 的语法
  - CREATE TABLE Persons
(
P_Id int NOT NULL AUTO_INCREMENT,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
PRIMARY KEY (P_Id)
)

+ MySQL 使用 AUTO_INCREMENT 关键字来执行 auto-increment 任务。
默认地，AUTO_INCREMENT 的开始值是 1，每条新记录递增 1。
要让 AUTO_INCREMENT 序列以其他的值起始，请使用下列 SQL 语法
  - ALTER TABLE Persons AUTO_INCREMENT=100

+ 用于 SQL Server 的语法
  - CREATE TABLE Persons
(
P_Id int PRIMARY KEY IDENTITY,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255)
)

+ MS SQL 使用 IDENTITY 关键字来执行 auto-increment 任务。
默认地，IDENTITY 的开始值是 1，每条新记录递增 1。
要规定 "P_Id" 列以 20 起始且递增 10，请把 identity 改为 IDENTITY(20,10)

+ 用于 Access 的语法
  - CREATE TABLE Persons
(
P_Id int PRIMARY KEY AUTOINCREMENT,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255)
)

+ MS Access 使用 AUTOINCREMENT 关键字来执行 auto-increment 任务。
默认地，AUTOINCREMENT 的开始值是 1，每条新记录递增 1。
要规定 "P_Id" 列以 20 起始且递增 10，请把 autoincrement 改为 AUTOINCREMENT(20,10)

+ 用于 Oracle 的语法
  - CREATE SEQUENCE seq_person
MINVALUE 1
START WITH 1
INCREMENT BY 1
CACHE 10

+ 代码创建名为 seq_person 的序列对象，它以 1 起始且以 1 递增。该对象缓存 10 个值以提高性能。CACHE 选项规定了为了提高访问速度要存储多少个序列值

### view

视图是可视化的表。
本章讲解如何创建、更新和删除视图。

什么是视图？
在 SQL 中，视图是基于 SQL 语句的结果集的可视化的表。
视图包含行和列，就像一个真实的表。视图中的字段就是来自一个或多个数据库中的真实的表中的字段。我们可以向视图添加 SQL 函数、WHERE 以及 JOIN 语句，我们也可以提交数据，就像这些来自于某个单一的表。

> 注释：数据库的设计和结构不会受到视图中的函数、where 或 join 语句的影响。

+ SQL CREATE VIEW 语法
  - CREATE VIEW view_name AS
SELECT column_name(s)
FROM table_name
WHERE condition

> 注释：视图总是显示最近的数据。每当用户查询视图时，数据库引擎通过使用 SQL 语句来重建数据。

+ CREATE VIEW 实例
  - CREATE VIEW [Current Product List] AS
SELECT ProductID,ProductName
FROM Products
WHERE Discontinued=No
  - 我们可以查询上面这个视图
    * SELECT * FROM [Current Product List]

+ 更新视图
  - SQL CREATE OR REPLACE VIEW Syntax
CREATE OR REPLACE VIEW view_name AS
SELECT column_name(s)
FROM table_name
WHERE condition

+ 我们希望向 "Current Product List" 视图添加 "Category" 列。我们将通过下列 SQL 更新视图
  - CREATE VIEW [Current Product List] AS
SELECT ProductID,ProductName,Category
FROM Products
WHERE Discontinued=No

+ 撤销视图
  - SQL DROP VIEW Syntax
DROP VIEW view_name

### date

日期
当我们处理日期时，最难的任务恐怕是确保所插入的日期的格式，与数据库中日期列的格式相匹配。
只要数据包含的只是日期部分，运行查询就不会出问题。但是，如果涉及时间，情况就有点复杂了。
在讨论日期查询的复杂性之前，我们先来看看最重要的内建日期处理函数。

+ MySQL Date 函数

函数 | 描述
---- | ----
NOW() | 返回当前的日期和时间
CURDATE() | 返回当前的日期
CURTIME() | 返回当前的时间
DATE() | 提取日期或日期/时间表达式的日期部分
EXTRACT() | 返回日期/时间按的单独部分
DATE_ADD() | 给日期添加指定的时间间隔
DATE_SUB() | 从日期减去指定的时间间隔
DATEDIFF() | 返回两个日期之间的天数
DATE_FORMAT() | 用不同的格式显示日期/时间

+ SQL Server Date 函数

函数 | 描述
---- | ----
GETDATE() | 返回当前日期和时间
DATEPART() | 返回日期/时间的单独部分
DATEADD() | 在日期中添加或减去指定的时间间隔
DATEDIFF() | 返回两个日期之间的时间
CONVERT() | 用不同的格式显示日期/时间

+ SQL Date 数据类型
  1. MySQL 使用下列数据类型在数据库中存储日期或日期/时间值：
    - DATE - 格式 YYYY-MM-DD
    - DATETIME - 格式: YYYY-MM-DD HH:MM:SS
    - TIMESTAMP - 格式: YYYY-MM-DD HH:MM:SS
    - YEAR - 格式 YYYY 或 YY
  2. SQL Server 使用下列数据类型在数据库中存储日期或日期/时间值：
    - DATE - 格式 YYYY-MM-DD
    - DATETIME - 格式: YYYY-MM-DD HH:MM:SS
    - SMALLDATETIME - 格式: YYYY-MM-DD HH:MM:SS
    - TIMESTAMP - 格式: 唯一的数字

> 提示：如果您希望使查询简单且更易维护，那么请不要在日期中使用时间部分！

### nulls

NULL 值是遗漏的未知数据。
默认地，表的列可以存放 NULL 值。
本章讲解 IS NULL 和 IS NOT NULL 操作符。

SQL NULL 值
如果表中的某个列是可选的，那么我们可以在不向该列添加值的情况下插入新记录或更新已有的记录。这意味着该字段将以 NULL 值保存。
NULL 值的处理方式与其他值不同。
NULL 用作未知的或不适用的值的占位符。

> 注释：无法比较 NULL 和 0；它们是不等价的。

+  IS NULL 操作符
  - SELECT LastName,FirstName,Address FROM Persons WHERE Address IS NULL

> 提示：请始终使用 IS NULL 来查找 NULL 值。

+ IS NOT NULL
  - SELECT LastName,FirstName,Address FROM Persons WHERE Address IS NOT NULL

### isnull()

SQL ISNULL()、NVL()、IFNULL() 和 COALESCE() 函数

微软的 ISNULL() 函数用于规定如何处理 NULL 值。
NVL(), IFNULL() 和 COALESCE() 函数也可以达到相同的结果。
在这里，我们希望 NULL 值为 0。
下面，如果 "UnitsOnOrder" 是 NULL，则不利于计算，因此如果值是 NULL 则 ISNULL() 返回 0。

+ SQL Server / MS Access
  - SELECT ProductName,UnitPrice\*(UnitsInStock+ISNULL(UnitsOnOrder,0)) FROM Products

+ Oracle
  - SELECT ProductName,UnitPrice\*(UnitsInStock+NVL(UnitsOnOrder,0)) FROM Products

+ MySQL
  - SELECT ProductName,UnitPrice\*(UnitsInStock+IFNULL(UnitsOnOrder,0)) FROM Products
  - 或者我们可以使用 COALESCE() 函数，就像这样
    * SELECT ProductName,UnitPrice\*(UnitsInStock+COALESCE(UnitsOnOrder,0)) FROM Products

### 数据类型

+ Microsoft Access 数据类型

数据类型 | 描述 | 存储
---- | ---- | ----
Text | 用于文本或文本与数字的组合。最多 255 个字符。 |
Memo | Memo 用于更大数量的文本。最多存储 65,536 个字符。注释：无法对 memo 字段进行排序。不过它们是可搜索的。 |
Byte | 允许 0 到 255 的数字。 | 1 字节
Integer | 允许介于 -32,768 到 32,767 之间的数字。 | 2 字节
Long | 允许介于 -2,147,483,648 与 2,147,483,647 之间的全部数字 | 4 字节
Single | 单精度浮点。处理大多数小数。 | 4 字节
Double  | 双精度浮点。处理大多数小数。 | 8 字节
Currency | 用于货币。支持 15 位的元，外加 4 位小数。 提示：您可以选择使用哪个国家的货币。 | 8 字节
AutoNumber | AutoNumber 字段自动为每条记录分配数字，通常从 1 开始。 | 4 字节
Date/Time | 用于日期和时间 | 8 字节
Yes/No | 逻辑字段，可以显示为 Yes/No、True/False 或 On/Off。 在代码中，使用常量 True 和 False （等价于 1 和 0） 注释：Yes/No 字段中不允许 Null 值 | 1 比特
Ole Object | 可以存储图片、音频、视频或其他 BLOBs (Binary Large OBjects)  | 最多 1GB
Hyperlink | 包含指向其他文件的链接，包括网页。 |
Lookup Wizard | 允许你创建一个可从下列列表中进行选择的选项列表。 | 4 字节

+ MySQL 数据类型

在 MySQL 中，有三种主要的类型：文本、数字和日期/时间类型。

+ Text 类型

数据类型 | 描述
---- | ----
CHAR(size) | 保存固定长度的字符串（可包含字母、数字以及特殊字符）。在括号中指定字符串的长度。最多 255 个字符。
VARCHAR(size) | 保存可变长度的字符串（可包含字母、数字以及特殊字符）。在括号中指定字符串的最大长度。最多 255 个字符。 注释：如果值的长度大于 255，则被转换为 TEXT 类型。
TINYTEXT | 存放最大长度为 255 个字符的字符串。
TEXT | 存放最大长度为 65,535 个字符的字符串。
BLOB | 用于 BLOBs (Binary Large OBjects)。存放最多 65,535 字节的数据。
MEDIUMTEXT | 存放最大长度为 16,777,215 个字符的字符串。
MEDIUMBLOB | 用于 BLOBs (Binary Large OBjects)。存放最多 16,777,215 字节的数据。
LONGTEXT | 存放最大长度为 4,294,967,295 个字符的字符串。
LONGBLOB | 用于 BLOBs (Binary Large OBjects)。存放最多 4,294,967,295 字节的数据。
ENUM(x,y,z,etc.)  | 允许你输入可能值的列表。可以在 ENUM 列表中列出最大 65535 个值。如果列表中不存在插入的值，则插入空值。 注释：这些值是按照你输入的顺序存储的。 可以按照此格式输入可能的值：ENUM('X','Y','Z')
SET | 与 ENUM 类似，SET 最多只能包含 64 个列表项，不过 SET 可存储一个以上的值。

+ Number 类型

数据类型 | 描述
---- | ----
TINYINT(size) | -128 到 127 常规。0 到 255 无符号*。在括号中规定最大位数。
SMALLINT(size) | -32768 到 32767 常规。0 到 65535 无符号*。在括号中规定最大位数。
MEDIUMINT(size) | -8388608 到 8388607 普通。0 to 16777215 无符号*。在括号中规定最大位数。
INT(size) | -2147483648 到 2147483647 常规。0 到 4294967295 无符号*。在括号中规定最大位数。
BIGINT(size) | -9223372036854775808 到 9223372036854775807 常规。0 到 18446744073709551615 无符号*。在括号中规定最大位数。
FLOAT(size,d) | 带有浮动小数点的小数字。在括号中规定最大位数。在 d 参数中规定小数点右侧的最大位数。
DOUBLE(size,d) | 带有浮动小数点的大数字。在括号中规定最大位数。在 d 参数中规定小数点右侧的最大位数。
DECIMAL(size,d) | 作为字符串存储的 DOUBLE 类型，允许固定的小数点。

> 这些整数类型拥有额外的选项 UNSIGNED。通常，整数可以是负数或正数。如果添加 UNSIGNED 属性，那么范围将从 0 开始，而不是某个负数。

+ Date 类型

数据类型 | 描述
DATE() | 日期。格式：YYYY-MM-DD 注释：支持的范围是从 '1000-01-01' 到 '9999-12-31'
DATETIME() | *日期和时间的组合。格式：YYYY-MM-DD HH:MM:SS 注释：支持的范围是从 '1000-01-01 00:00:00' 到 '9999-12-31 23:59:59'
TIMESTAMP() | *时间戳。TIMESTAMP 值使用 Unix 纪元('1970-01-01 00:00:00' UTC) 至今的描述来存储。格式：YYYY-MM-DD HH:MM:SS 注释：支持的范围是从 '1970-01-01 00:00:01' UTC 到 '2038-01-09 03:14:07' UTC
TIME() | 时间。格式：HH:MM:SS 注释：支持的范围是从 '-838:59:59' 到 '838:59:59'
YEAR() | 2 位或 4 位格式的年。 注释：4 位格式所允许的值：1901 到 2155。2 位格式所允许的值：70 到 69，表示从 1970 到 2069。

> 即便 DATETIME 和 TIMESTAMP 返回相同的格式，它们的工作方式很不同。在 INSERT 或 UPDATE 查询中，TIMESTAMP 自动把自身设置为当前的日期和时间。TIMESTAMP 也接受不同的格式，比如 YYYYMMDDHHMMSS、YYMMDDHHMMSS、YYYYMMDD 或 YYMMDD

## 函数

### avg()

AVG 函数返回数值列的平均值。NULL 值不包括在计算中

+ 语法
  - SELECT AVG(column_name) FROM table_name

+ 例子
  1. SELECT AVG(OrderPrice) AS OrderAverage FROM Orders
  2. SELECT Customer FROM Orders WHERE OrderPrice>(SELECT AVG(OrderPrice) FROM Orders)

### count()

COUNT() 函数返回匹配指定条件的行数。

+ 语法
  1. COUNT(column_name) 语法
    - SELECT COUNT(column_name) FROM table_name // COUNT(column_name) 函数返回指定列的值的数目（NULL 不计入）
  2. COUNT(\*) 语法
    - SELECT COUNT(\*) FROM table_name
  3. COUNT(DISTINCT column_name) 语法
    - SELECT COUNT(DISTINCT column_name) FROM table_name // COUNT(DISTINCT column_name) 函数返回指定列的不同值的数目

> 注释：COUNT(DISTINCT) 适用于 ORACLE 和 Microsoft SQL Server，但是无法用于 Microsoft Access

### first()

FIRST() 函数返回指定的字段中第一个记录的值

> 提示：可使用 ORDER BY 语句对记录进行排序。

+ FIRST() 语法
  - SELECT FIRST(column_name) FROM table_name

### last()

LAST() 函数返回指定的字段中最后一个记录的值。

> 提示：可使用 ORDER BY 语句对记录进行排序。

+ 语法
  - SELECT LAST(column_name) FROM table_name

### max()

MAX 函数返回一列中的最大值。NULL 值不包括在计算中。

+ 语法
  - SELECT MAX(column_name) FROM table_name

> 注释：MIN 和 MAX 也可用于文本列，以获得按字母顺序排列的最高或最低值。

### min()

MIN 函数返回一列中的最小值。NULL 值不包括在计算中。

+ 语法
  - SELECT MIN(column_name) FROM table_name

> 注释：MIN 和 MAX 也可用于文本列，以获得按字母顺序排列的最高或最低值。

### sum()

SUM 函数返回数值列的总数（总额）。

+ 语法
  - SELECT SUM(column_name) FROM table_name

### group by

GROUP BY 语句用于结合合计函数，根据一个或多个列对结果集进行分组。

+ 语法
  - SELECT column_name, aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name

+ 例子
  - SELECT Customer,SUM(OrderPrice) FROM Orders GROUP BY Customer

### having

在 SQL 中增加 HAVING 子句原因是，WHERE 关键字无法与合计函数一起使用

+ 语法
  - SELECT column_name, aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name
HAVING aggregate_function(column_name) operator value

+ 例子 我们希望查找订单总金额少于 2000 的客户
  - SELECT Customer,SUM(OrderPrice) FROM Orders
GROUP BY Customer
HAVING SUM(OrderPrice)<2000

### ucase()

UCASE 函数把字段的值转换为大写。

+ 语法
  - SELECT UCASE(column_name) FROM table_name

### lcase()

LCASE 函数把字段的值转换为小写。

+ 语法
  - SELECT LCASE(column_name) FROM table_name

### mid()

MID 函数用于从文本字段中提取字符。

+ 语法
  - SELECT MID(column_name,start[,length]) FROM table_name

参数 | 描述
---- | ----
column_name | 必需。要提取字符的字段。
start | 必需。规定开始位置（起始值是 1）。
length | 可选。要返回的字符数。如果省略，则 MID() 函数返回剩余文本。

+ 例子
  - SELECT MID(City,1,3) as SmallCity FROM Persons

### len()

LEN 函数返回文本字段中值的长度。

+ 语法
  - SELECT LEN(column_name) FROM table_name

### round()

ROUND 函数用于把数值字段舍入为指定的小数位数。

+ 语法
  - SELECT ROUND(column_name,decimals) FROM table_name

参数 | 描述
---- | ----
column_name | 必需。要舍入的字段。
decimals | 必需。规定要返回的小数位数。

### now()

NOW 函数返回当前的日期和时间。

> 提示：如果您在使用 Sql Server 数据库，请使用 getdate() 函数来获得当前的日期时间。

+ 语法
  - SELECT NOW() FROM table_name

### format()

FORMAT 函数用于对字段的显示进行格式化。

+ 语法
  - SELECT FORMAT(column_name,format) FROM table_name

参数 | 描述
---- | ----
column_name | 必需。要格式化的字段。
format | 必需。规定格式。

+ 例子 显示每天日期所对应的名称和价格（日期的显示格式是 "YYYY-MM-DD"）
  - SELECT ProductName, UnitPrice, FORMAT(Now(),'YYYY-MM-DD') as PerDate FROM Products

## PHP与数据库连接

1. 新建一个php连接数据库文件

```
<?php
  header("Content-type: text/html; charset=utf-8"); // 页面编码
  $con = mysql_connect('localhost','root','765139'); // 连接数据库
  mysql_select_db('ajaxmusic'); // 选择数据库
  mysql_query('set names utf8'); // 设置数据库编码
?>
```
2. 载建立一个需要操作的php

```
<?php
  require_once('./connect.php');

  $username = $_POST['username']; // 变量
  $sql = "select * from reg where username = '$username'"; // 字符串查询 SQL语句
  $query = mysql_query($sql); // 连接到数据库

  if($query && mysql_num_rows($query)) { // 判断操作
    echo "<script>alert('已经有人注册过了')</script>";
    echo "<script>history.back()</script>";
  } else{
    $sql = "insert into reg(username) values('$username')";
    $query = mysql_query($sql);
    if($query) {
      echo "<script>alert('注册成功')</script>"; // 输出
      echo "<script>window.location = 'index.html</script>";
    }
  }
?>
```

3. 读取数据

```
<?php
  require_once('connect.php');
  $sql = "update reg set username = '2015test' where id =2";
  $query = mysql_query($sql);

  $sql = "SELECT * FROM reg";
  $query = mysql_query($sql);

  // print_r($query);
  // print_r(mysql_num_rows($query)); // 几条数据

  // $row = mysql_fetch_row($query); // 数组下标的方式 一条一条输出 相当于指针
  // print_r($row);
  // while($row = mysql_fetch_row($query)) { // 数组下标的方式
  //   print_r($row);
  // }
  // while($row = mysql_fetch_assoc($query)) { // 数组键值
  //   print_r($row);
  // }
  // while($row =mysql_fetch_array($query)) { // 数组整体输出方式
  //   print_r($row);
  // }
  // while($row =mysql_fetch_object($query)) { // 对象键值方式
  //   print_r($row);
  // }
  // while($row =mysql_fetch_assoc($query)) {
  //   print_r($row['username']); // 数组
  // }
  // while($row =mysql_fetch_object($query)) {
  //   print_r($row -> username); // 对象
  // }
  while($row = mysql_fetch_assoc($query)) {
    $data[] = $row;
  }

  // print_r(json_encode($data));
  echo json_encode($data);
 ?>
```

> 先操作SQL语句，再把数据读取，一把转成 json

```
while($row = mysql_fetch_assoc($query)) {
    $data[] = $row;
  }

  echo json_encode($data);
```

4. 前台操作

```
ajax({
    url: 'data.php',
    type: 'POST',
    asyn: true,
    data: {username: 'hello'},
    dataType: 'json',
    success: function(data) {
      console.log(typeof data); // 判断属性
      eval(data); // 转换成对象
    },
    fail: function(err) {
      console.log(err.status);
    }
  })
```

5. 注意
+ $text = htmlspecialchars($\_POST['text']); // 防止注入式攻击

6. 时间戳

```
var time = new Date();
// var timer = time.getTime();
var unixTimestamp = new Date(1521353164287);
var commonTime = unixTimestamp.toLocaleString();
console.log(commonTime);

Date.prototype.toLocaleString = function() { // 重写格式转换
  return this.getFullYear() + "年" + (this.getMonth() + 1) + "月" + this.getDate() + "日 " + this.getHours() + "点" + this.getMinutes() + "分" + this.getSeconds() + "秒";
    };
```
