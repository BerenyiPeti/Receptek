use master
go

create database receptkonyv
go

CREATE TABLE [dbo].[Kategoriak](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nev] [nvarchar](max) NOT NULL,
	PRIMARY KEY (id)
)
go

CREATE TABLE [dbo].[Receptek](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nev] [nvarchar](max) NOT NULL,
	[kat_id] [int] NOT NULL,
	[kep_eleresi_ut] [nvarchar](max) NOT NULL,
	[leiras] [nvarchar](max) NOT NULL,
 PRIMARY KEY (id)
)
GO

ALTER TABLE [dbo].[Receptek] ADD FOREIGN KEY([kat_id])
REFERENCES [dbo].[Kategoriak] ([id])
GO

	


