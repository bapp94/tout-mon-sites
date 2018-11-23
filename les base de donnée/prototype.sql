SELECT nom_colonne1, nom_colonne2
-- selectionne les colonnes nom_colonne1 et nom_colonne2
	SELECT productName, productVendor, MSRP

FROM nom_table
-- cherche dans la table nom_table
	FROM products

WHERE condition
-- extrait les lignes respectant la condition
	WHERE productLine = 'Motorcycles'

ORDER BY nom_colonne DESC/ASC
-- tri nom_colonne par ordre descendant/ascendant

(element) AS elem
-- alias : permet de remplacer un element (operation, varialbe, table) par un autre
	(MSRP - buyPrice) AS margin


WHERE nom_colonne BETWEEN var1 AND var2
-- selectionne les lignes dont nom_colonne est entre var1 ET var2
	WHERE buyPrice BETWEEN 60 AND 90


WHERE nom_colonne = 'var1' OR nom_colonne = 'var2'
-- selectionne les lignes dont nom_colonne vaut var1 OU var2
	WHERE productScale = '1:10' OR productScale = '1:18' 

WHERE nom_colonne LIKE modele
-- selectionne les lignes dont nom_colonne contient le modele
	-- '%a' : recherche toutes les lignes de nom_colonne qui fini par un 'a'
	-- 'a%'' : recherche toutes les lignes de nom_colonne qui commence par un 'a'
	-- '%a%'' : recherche toutes les lignes de colonne 1qui contient un 'a'
	-- 'pa%on' : recherche toutes les lignes de nom_colonne dont la variable commence par 'pa' et fini par 'on'
	-- 'a_c' : recherche toutes les lignes de la nom_colonne de 3 lettres qui commencent par 'a' et finissent par 'c' ('_' ne peut etre remplace par qu'un caractère)
	WHERE productName LIKE '196%'

GROUP BY nom_colonne
-- 	affiche une ligne pour une variable en precisant la quantité de celle-ci
	GROUP BY productVendor


AVG(nom_colonne)
-- 
	SELECT productVendor, AVG(MSRP) AS averagePrice

COUNT (*)
-- 
	SELECT productLine, COUNT(productCode)

SUM (nom_colonne)
-- calcule la some totale d'une colone contenant des valeurs numeriques
	SUM(quantityInStock)

MAX(nom_colonne) / MIN(nom_colonne)
-- recupere la valeur max ou min d'une coleur contenant des valeurs numeriques
	MAX(quantityInStock) / MIN(buyPrice)

HAVING fonction(colonne2) operateur valeur
-- comme WHERE sauf que HAVING permet de filtrer en utilisant des fonctions telles que SUM(), COUNT(), AVG(), MIN() ou MAX().
	HAVING totalCredit > 20000

INNER JOIN table2 ON table1.id = table2.fk_id
-- permet de lier plusieurs tables entre elles
	INNER JOIN offices ON offices.officeCode = employees.officeCode
