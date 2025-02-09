-- Criação do banco de dados
CREATE DATABASE WMSGUARD;

-- Conectar ao banco de dados criado
\c WMSGUARD;

-- Tabela: PRODUT
CREATE TABLE PRODUT (
    PRO_ID serial PRIMARY KEY,  -- Auto-incremental
    PRO_CODPRO varchar(50),
    PRO_NOME varchar(100),
    PRO_DESC text,
    PRO_CAT varchar(50),
    PRO_PESO decimal,
    PRO_ALT decimal,
    PRO_LARG decimal,
    PRO_COMP decimal,
    PRO_DTCRI timestamp DEFAULT current_timestamp,
    RECNO serial,  -- Auto-incremental
    DELETD char(1) DEFAULT 'N'
);

-- Tabela: LOCALI
CREATE TABLE LOCALI (
    LOC_ID serial PRIMARY KEY,  -- Auto-incremental
    LOC_CODLOC varchar(50),
    LOC_DESC text,
    LOC_CAP integer,
    LOC_STAT varchar(20),
    RECNO serial,  -- Auto-incremental
    DELETD char(1) DEFAULT 'N'
);

-- Tabela: ESTOQ
CREATE TABLE ESTOQ (
    EST_ID serial PRIMARY KEY,  -- Auto-incremental
    EST_PROID integer REFERENCES PRODUT(PRO_ID),
    EST_LOCID integer REFERENCES LOCALI(LOC_ID),
    EST_QTDE integer,
    EST_DTATU timestamp DEFAULT current_timestamp,
    RECNO serial,  -- Auto-incremental
    DELETD char(1) DEFAULT 'N'
);

-- Tabela: MOVIME
CREATE TABLE MOVIME (
    MOV_ID serial PRIMARY KEY,  -- Auto-incremental
    MOV_PROID integer REFERENCES PRODUT(PRO_ID),
    MOV_QTDE integer,
    MOV_TIPO varchar(3),  -- Tipo de movimentação (ENT, SAI, TRA)
    MOV_LOCOR integer REFERENCES LOCALI(LOC_ID),  -- Localização de origem
    MOV_LOCDE integer REFERENCES LOCALI(LOC_ID),  -- Localização de destino
    MOV_DTMOV timestamp DEFAULT current_timestamp,
    RECNO serial,  -- Auto-incremental
    DELETD char(1) DEFAULT 'N'
);

-- Tabela: PEDIDO
CREATE TABLE PEDIDO (
    PED_ID serial PRIMARY KEY,  -- Auto-incremental
    PED_CODPED varchar(50),
    PED_CLIID integer REFERENCES CLIENT(CLI_ID),
    PED_FORID integer REFERENCES FORNEC(FOR_ID),
    PED_DTPED timestamp DEFAULT current_timestamp,
    PED_STAT varchar(20),
    RECNO serial,  -- Auto-incremental
    DELETD char(1) DEFAULT 'N'
);

-- Tabela: CLIENT
CREATE TABLE CLIENT (
    CLI_ID serial PRIMARY KEY,  -- Auto-incremental
    CLI_NOME varchar(100),
    CLI_EMAIL varchar(100),
    CLI_TEL varchar(20),
    CLI_END text,
    RECNO serial,  -- Auto-incremental
    DELETD char(1) DEFAULT 'N'
);

-- Tabela: FORNEC
CREATE TABLE FORNEC (
    FOR_ID serial PRIMARY KEY,  -- Auto-incremental
    FOR_NOME varchar(100),
    FOR_EMAIL varchar(100),
    FOR_TEL varchar(20),
    FOR_END text,
    RECNO serial,  -- Auto-incremental
    DELETD char(1) DEFAULT 'N'
);

-- Tabela: USUARI
CREATE TABLE USUARI (
    USU_ID serial PRIMARY KEY,  -- Auto-incremental
    USU_NOME varchar(100),
    USU_EMAIL varchar(100),
    USU_SENHA varchar(100),
    USU_PERFIL varchar(10),  -- Perfil do usuário (ADM, OPE)
    RECNO serial,  -- Auto-incremental
    DELETD char(1) DEFAULT 'N'
);
