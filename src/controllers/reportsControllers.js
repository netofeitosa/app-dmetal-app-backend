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

const getEstoqueLojas = async (_req, res) => {
  // Função para somar valores de um array de objetos
  const sumValues = (arr, prop) =>
    arr.reduce((acc, obj) => acc + parseFloat(obj[prop]), 0);

  const sumValuesMarca = (arr, prop, conditions) => {
    return sumValues(
      arr.filter((obj) => conditions.includes(obj.cod_marca)),
      prop
    );
  };

  const result = await reportsModel.getEstoqueLojas();

  const chica = [2, 3];
  const dmetal = [1];
  const morah = [10];

  const total_dmetal = sumValuesMarca(result, "total", dmetal);
  const total_chica = sumValuesMarca(result, "total", chica);
  const total_morah = sumValuesMarca(result, "total", morah);
  const total_marca = total_dmetal + total_chica + total_morah;
  const total_jeans = sumValues(result, "jeans");
  const total_malha = sumValues(result, "malha");
  const total_plano = sumValues(result, "plano");

  // Agrupar coleções por empresa
  const empresas = result.reduce((acc, loja) => {
    const {
      key,
      empresa,
      descricao,
      cod_colecao,
      colecao,
      dmetal,
      chica,
      chiquinha,
      morah,
      jeans,
      malha,
      plano,
      total,
    } = loja;
    if (!acc[empresa]) {
      acc[empresa] = {
        key: key,
        empresa: empresa.toString(),
        descricao: descricao.toString(),
        dmetal: 0,
        chica: 0,
        morah: 0,
        jeans: 0,
        malha: 0,
        plano: 0,
        total: 0,
        colecoes: [],
      };
    }
    acc[empresa].colecoes.push({
      cod_colecao: cod_colecao,
      colecao: colecao,
      jeans: jeans,
      malha: malha,
      plano: plano,
      total: total,
    });
    acc[empresa].dmetal += dmetal;
    acc[empresa].chica += chica + chiquinha;
    acc[empresa].morah += morah;
    acc[empresa].jeans += jeans;
    acc[empresa].malha += malha;
    acc[empresa].plano += plano;
    acc[empresa].total += total;
    return acc;
  }, {});

  const resultData = {
    total_dmetal: total_dmetal,
    total_chica: total_chica,
    total_morah: total_morah,
    total_marca: total_marca,
    total_jeans: total_jeans,
    total_malha: total_malha,
    total_plano: total_plano,
    lojas: Object.values(empresas),
  };

  return res.status(200).json([resultData]);
};

const getControleFaccoes = async (_req, res) => {
  const result = await reportsModel.getControleFaccoes();

  // Função para somar valores de um array de objetos
  const sumValues = (arr, prop) =>
    arr.reduce((acc, obj) => acc + parseFloat(obj[prop]), 0);

  const qtde_total_faccoes = sumValues(result, "qtde_faccoes");
  const qtde_total_pecas = sumValues(result, "qtde_pecas_enviadas");
  const retorno_mes_inter = sumValues(result, "retorno_mes_inter");
  const retorno_mes_anterior_inter = sumValues(
    result,
    "retorno_mes_anterior_inter"
  );
  const retorno_dia = sumValues(result, "retorno_dia");
  const retorno_dia_anterior = sumValues(result, "retorno_dia_anterior");
  const retorno_mes = sumValues(result, "retorno_mes");
  const retorno_mes_anterior = sumValues(result, "retorno_mes_anterior");

  // Agrupar coleções por supervisor
  const supervisores = result.reduce((acc, data) => {
    const {
      key,
      entidade,
      supervisor,
      cod_colecao,
      colecao,
      qtde_faccoes,
      qtde_op,
      qtde_pecas_enviadas,
    } = data;

    if (!acc[entidade]) {
      acc[entidade] = {
        key: key,
        entidade: entidade,
        supervisor: supervisor,
        qtde_faccoes: 0,
        qtde_op: 0,
        qtde_pecas_enviadas: 0,
        colecoes: [],
      };
    }
    acc[entidade].colecoes.push({
      cod_colecao: cod_colecao,
      colecao: colecao,
      qtde_faccoes: qtde_faccoes,
      qtde_op: qtde_op,
      qtde_pecas_enviadas: qtde_pecas_enviadas,
    });
    acc[entidade].qtde_faccoes += qtde_faccoes;
    acc[entidade].qtde_op += qtde_op;
    acc[entidade].qtde_pecas_enviadas += qtde_pecas_enviadas;
    return acc;
  }, {});

  const resultData = {
    qtde_faccoes: qtde_total_faccoes,
    qtde_pecas: qtde_total_pecas,
    retorno_mes_inter: retorno_mes_inter,
    retorno_mes_anterior_inter: retorno_mes_anterior_inter,
    retorno_dia: retorno_dia,
    retorno_dia_anterior: retorno_dia_anterior,
    retorno_mes: retorno_mes,
    retorno_mes_anterior: retorno_mes_anterior,
    supervisores: Object.values(supervisores),
  };

  return res.status(200).json([resultData]);
};

const getSolicitacaoFaturamento = async (_req, res) => {
  const result = await reportsModel.getSolicitacaoFaturamento();
  const [result2] = result;

  // Função para somar valores de um array de objetos
  const sumValues = (arr, prop) =>
    arr.reduce((acc, obj) => acc + parseFloat(obj[prop]), 0);

  const total_solicitado = sumValues(result, "total_solicitado");
  const total_processado = sumValues(result, "total_processado");
  const total_nao_processado = sumValues(result, "total_nao_processado");

  const resultData = {
    mes: !result2?.mes ? null : result2.mes,
    total_solicitado: total_solicitado,
    total_processado: total_processado,
    total_nao_processado: total_nao_processado,
    movimentos: result.map((movimento) => ({
      key: movimento.key,
      movimento: movimento.data,
      total_solicitado: movimento.total_solicitado,
      total_processado: movimento.total_processado,
      total_nao_processado: movimento.total_nao_processado,
    })),
  };

  return res.status(200).json([resultData]);
};

const getRepresentanteDmetalResumo = async (_req, res) => {
  const result = await reportsModel.getRepresentanteDmetalResumo();
  return res.status(200).json(result);
};

const getRepresentanteChicaResumo = async (_req, res) => {
  const result = await reportsModel.getRepresentanteChicaResumo();
  return res.status(200).json(result);
};

const getRepresentanteDmetalMapa = async (_req, res) => {
  const result = await reportsModel.getRepresentanteDmetalMapa();
  return res.status(200).json(result);
};

const getRepresentanteChicaMapa = async (_req, res) => {
  const result = await reportsModel.getRepresentanteChicaMapa();
  return res.status(200).json(result);
};

const getRepresentanteDmetalSemana = async (_req, res) => {
  const result = await reportsModel.getRepresentanteDmetalSemana();
  return res.status(200).json(result);
};

const getRepresentanteChicaSemana = async (_req, res) => {
  const result = await reportsModel.getRepresentanteChicaSemana();
  return res.status(200).json(result);
};

module.exports = {
  getVendasLojas,
  getVendasCupom,
  getVendasMes,
  getEstoqueLojas,
  getControleFaccoes,
  getSolicitacaoFaturamento,
  getRepresentanteDmetalResumo,
  getRepresentanteChicaResumo,
  getRepresentanteDmetalMapa,
  getRepresentanteChicaMapa,
  getRepresentanteDmetalSemana,
  getRepresentanteChicaSemana,
};
