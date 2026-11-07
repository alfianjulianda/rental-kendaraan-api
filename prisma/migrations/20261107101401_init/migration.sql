-- CreateTable
CREATE TABLE `pelanggan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `no_telepon` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `pelanggan_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kendaraan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `merk` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `tahun` INTEGER NOT NULL,
    `plat_nomor` VARCHAR(191) NOT NULL,
    `jenis` VARCHAR(191) NOT NULL,
    `harga_sewa` DECIMAL(12, 2) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'tersedia',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `kendaraan_plat_nomor_key`(`plat_nomor`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `penyewaan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pelanggan_id` INTEGER NOT NULL,
    `kendaraan_id` INTEGER NOT NULL,
    `tanggal_mulai` DATETIME(3) NOT NULL,
    `tanggal_selesai` DATETIME(3) NOT NULL,
    `total_biaya` DECIMAL(12, 2) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'menunggu',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `penyewaan` ADD CONSTRAINT `penyewaan_pelanggan_id_fkey` FOREIGN KEY (`pelanggan_id`) REFERENCES `pelanggan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penyewaan` ADD CONSTRAINT `penyewaan_kendaraan_id_fkey` FOREIGN KEY (`kendaraan_id`) REFERENCES `kendaraan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
