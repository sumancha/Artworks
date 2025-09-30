using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ImageManipulation.API.Migrations
{
    /// <inheritdoc />
    public partial class AddedCreatedDate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "ArtImage",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "SoldDate",
                table: "ArtImage",
                type: "datetime2",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "ArtImage");

            migrationBuilder.DropColumn(
                name: "SoldDate",
                table: "ArtImage");
        }
    }
}
