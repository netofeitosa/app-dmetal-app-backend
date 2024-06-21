const reportsModel = require("../models/reportsModel");

const getVendasLojas = async (_req, res) => {
  const result = await reportsModel.getVendasLojas();

  const [result2] = result;

  const sumValues = (arr, prop) =>
    arr.reduce((acc, obj) => acc + parseFloat(obj[prop]), 0);

  // Calcular totais

  const media_mensal_venda_ano = sumValues(result, "media_venda_ano");
  const media_mensal_venda_ano_varejo = sumValues(
    result,
    "media_venda_ano_varejo"
  );
  const media_mensal_venda_ano_atacado = sumValues(
    result,
    "media_venda_ano_atacado"
  );
  const media_mensal_venda_ano_site = sumValues(result, "media_venda_ano_site");

  const venda_dia_varejo = sumValues(result, "venda_dia_varejo");
  const venda_dia_anterior_varejo = sumValues(
    result,
    "venda_dia_anterior_varejo"
  );
  const venda_dia_atacado = sumValues(result, "venda_dia_atacado");
  const venda_dia_anterior_atacado = sumValues(
    result,
    "venda_dia_anterior_atacado"
  );
  const venda_dia_ecommerce = sumValues(result, "venda_dia_ecommerce");
  const venda_dia_anterior_ecommerce = sumValues(
    result,
    "venda_dia_anterior_ecommerce"
  );
  const venda_dia = sumValues(result, "venda_dia");
  const venda_dia_anterior = sumValues(result, "venda_dia_anterior");
  const venda_mes_varejo = sumValues(result, "venda_mes_varejo");
  const venda_mes_anterior_varejo = sumValues(
    result,
    "venda_mes_anterior_varejo"
  );
  const venda_mes_atacado = sumValues(result, "venda_mes_atacado");
  const venda_mes_anterior_atacado = sumValues(
    result,
    "venda_mes_anterior_atacado"
  );
  const venda_mes_ecommerce = sumValues(result, "venda_mes_ecommerce");
  const venda_mes_anterior_ecommerce = sumValues(
    result,
    "venda_mes_anterior_ecommerce"
  );
  const venda_mes = sumValues(result, "venda_mes");
  const venda_mes_anterior = sumValues(result, "venda_mes_anterior");
  const quant_pcs_mes_varejo = sumValues(result, "quant_pcs_mes_varejo");
  const quant_pcs_mes_anterior_varejo = sumValues(
    result,
    "quant_pcs_mes_anterior_varejo"
  );
  const quant_pcs_mes_atacado = sumValues(result, "quant_pcs_mes_atacado");
  const quant_pcs_mes_anterior_atacado = sumValues(
    result,
    "quant_pcs_mes_anterior_atacado"
  );
  const quant_pcs_mes_ecommerce = sumValues(result, "quant_pcs_mes_ecommerce");
  const quant_pcs_mes_anterior_ecommerce = sumValues(
    result,
    "quant_pcs_mes_anterior_ecommerce"
  );
  const pcs_mes = sumValues(result, "quant_pcs_mes");
  const pcs_mes_anterior = sumValues(result, "quant_pcs_mes_anterior");
  const pm_varejo = result2.pm_varejo;
  const pm_atacado = result2.pm_atacado;
  const pm_ecommerce = result2.pm_ecommerce;

  const resultData = {
    media_mensal_venda_ano: media_mensal_venda_ano,
    media_mensal_venda_ano_varejo: media_mensal_venda_ano_varejo,
    media_mensal_venda_ano_atacado: media_mensal_venda_ano_atacado,
    media_mensal_venda_ano_site: media_mensal_venda_ano_site,
    venda_dia_varejo: venda_dia_varejo,
    venda_dia_anterior_varejo: venda_dia_anterior_varejo,
    venda_dia_atacado: venda_dia_atacado,
    venda_dia_anterior_atacado: venda_dia_anterior_atacado,
    venda_dia_ecommerce: venda_dia_ecommerce,
    venda_dia_anterior_ecommerce: venda_dia_anterior_ecommerce,
    venda_dia: venda_dia,
    venda_dia_anterior: venda_dia_anterior,
    venda_mes_varejo: venda_mes_varejo,
    venda_mes_anterior_varejo: venda_mes_anterior_varejo,
    venda_mes_atacado: venda_mes_atacado,
    venda_mes_anterior_atacado: venda_mes_anterior_atacado,
    venda_mes_ecommerce: venda_mes_ecommerce,
    venda_mes_anterior_ecommerce: venda_mes_anterior_ecommerce,
    venda_mes: venda_mes,
    venda_mes_anterior: venda_mes_anterior,
    quant_pcs_mes_varejo: quant_pcs_mes_varejo,
    quant_pcs_mes_anterior_varejo: quant_pcs_mes_anterior_varejo,
    quant_pcs_mes_atacado: quant_pcs_mes_atacado,
    quant_pcs_mes_anterior_atacado: quant_pcs_mes_anterior_atacado,
    quant_pcs_mes_ecommerce: quant_pcs_mes_ecommerce,
    quant_pcs_mes_anterior_ecommerce: quant_pcs_mes_anterior_ecommerce,
    pcs_mes: pcs_mes,
    pcs_mes_anterior: pcs_mes_anterior,
    pm_varejo: parseFloat(pm_varejo),
    pm_atacado: parseFloat(pm_atacado),
    pm_ecommerce: parseFloat(pm_ecommerce),
    lojas: result.map((loja) => ({
      key: loja.key,
      loja: loja.loja,
      descricao: loja.descricao,
      descricao_completa: loja.descricao_completa,
      segmento: loja.segmento,
      media_mensal_pcs: loja.media_pcs_ano,
      media_mensal_venda: loja.media_venda_ano,
      venda_dia_loja: parseFloat(loja.venda_dia_loja),
      venda_dia_anterior_loja: parseFloat(loja.venda_dia_anterior_loja),
      venda_mes_loja: parseFloat(loja.venda_mes_loja),
      venda_mes_anterior_loja: parseFloat(loja.venda_mes_anterior_loja),
      meta: parseFloat(loja.meta),
    })),
  };
  return res.status(200).json([resultData]);
};

const getVendasCupom = async (_req, res) => {
  const result = await reportsModel.getVendasCupom();

  // Função para somar valores de um array de objetos
  const sumValues = (arr, prop) =>
    arr.reduce((acc, obj) => acc + parseFloat(obj[prop]), 0);

  // Calcular totais
  const total_venda = sumValues(result, "total_venda");
  const total_cupom = sumValues(result, "total_cupom");
  const total_venda_ant = sumValues(result, "total_venda_anterior");
  const total_cupom_ant = sumValues(result, "total_cupom_anterior");

  // Calcular porcentagens
  const perc = (total_cupom / total_venda) * 100;
  const perc_ant = (total_cupom_ant / total_venda_ant) * 100;

  // Formatando os totais
  const formatMoney = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const resultData = {
    total_venda_format: formatMoney(total_venda),
    total_cupom_format: formatMoney(total_cupom),
    total_venda: total_venda.toFixed(2),
    total_cupom: total_cupom.toFixed(2),
    perc: perc.toFixed(2),
    total_venda_ant_format: formatMoney(total_venda_ant),
    total_cupom_ant_format: formatMoney(total_cupom_ant),
    total_venda_ant: total_venda_ant.toFixed(2),
    total_cupom_ant: total_cupom_ant.toFixed(2),
    perc_ant: perc_ant.toFixed(2),
    lojas: result.map((loja) => ({
      key: loja.key.toString(),
      loja: loja.loja.toString(),
      nome_fantasia: loja.nome_fantasia,
      total_venda_format: loja.total_venda_format,
      total_cupom_format: loja.total_cupom_format,
      total_venda: loja.total_venda,
      total_cupom: loja.total_cupom,
      perc: loja.perc.toString(),
      total_venda_ant_format: loja.total_venda_anterior_format,
      total_cupom_ant_format: loja.total_cupom_anterior_format,
      total_venda_ant: loja.total_venda_anterior,
      total_cupom_ant: loja.total_cupom_anterior,
      perc_ant: loja.perc_anterior.toString(),
    })),
  };

  return res.status(200).json([resultData]);
};

const getVendasMes = async (_req, res) => {
  // Função para somar valores de um array de objetos
  const sumValues = (arr, prop) =>
    arr.reduce((acc, obj) => acc + parseFloat(obj[prop]), 0);

  const sumValuesWithCondition = (arr, prop, condition) =>
    sumValues(arr.filter(condition), prop);

  const sumValuesWithCondition2 = (arr, prop, condition2) =>
    sumValues(arr.filter(condition2), prop);

  const result = await reportsModel.getVendasMes();

  const condition = (obj) => obj.mes === "GERAL";
  const condition2 = (obj) => obj.mes_atual === "S";

  const total_2021 = sumValuesWithCondition(result, "t2021", condition);
  const total_2022 = sumValuesWithCondition(result, "t2022", condition);
  const total_2023 = sumValuesWithCondition(result, "t2023", condition);
  const total_2024 = sumValuesWithCondition(result, "t2024", condition);

  const total_2021_mes = sumValuesWithCondition2(result, "t2021", condition2);
  const total_2022_mes = sumValuesWithCondition2(result, "t2022", condition2);
  const total_2023_mes = sumValuesWithCondition2(result, "t2023", condition2);
  const total_2024_mes = sumValuesWithCondition2(result, "t2024", condition2);

  const resultData = {
    total_venda_2021: total_2021.toString(),
    total_venda_2021_mes: total_2021_mes.toString(),
    total_venda_2022: total_2022.toString(),
    total_venda_2022_mes: total_2022_mes.toString(),
    total_venda_2023: total_2023.toString(),
    total_venda_2023_mes: total_2023_mes.toString(),
    total_venda_2024: total_2024.toString(),
    total_venda_2024_mes: total_2024_mes.toString(),
    lojas: result.map((loja) => ({
      key: loja.key.toString(),
      loja: loja.empresa.toString(),
      nome_fantasia: loja.nome_fantasia,
      mes: loja.mes,
      t2024: loja.t2024,
      t2023: loja.t2023,
      t2022: loja.t2022,
      T2021: loja.t2021,
    })),
  };

  return res.status(200).json([resultData]);
};

module.exports = {
  getVendasLojas,
  getVendasCupom,
  getVendasMes,
};
