import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    nome_despesa: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
    nome_obra: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
    codigo_contrato: {
      type: Number,
      required: true,
    },
    data_despesa: {
      type: Date,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
    codigo_fase: {
      type: Number,
      required: true,
    },
    codigo_fornecedor: {
      type: Number,
      required: true,
    },
    valor_despesa: {
      type: Number,
      required: true,
    },
    data_pagamento: {
      type: Date,
    },
    data_entrega: {
      type: Date,
    },
    valor_desconto: {
      type: Number,
    },
    qtde: {
      type: Number,
    },
    codigo_unidade: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", userSchema);

export default UserModel;
