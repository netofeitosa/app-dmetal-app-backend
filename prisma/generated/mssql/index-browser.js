
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: "5.14.0",
  engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.VW_AUTORIZACOES_WEB_DEVScalarFieldEnum = {
  id: 'id',
  despesas: 'despesas',
  descontos: 'descontos',
  saidas: 'saidas',
  cancelamentos: 'cancelamentos'
};

exports.Prisma.VW_AUTORIZACOES_DESPESAS_COFRE_DEVScalarFieldEnum = {
  key: 'key',
  despesa: 'despesa',
  loja: 'loja',
  data: 'data',
  movimento: 'movimento',
  nome_fantasia: 'nome_fantasia',
  valor: 'valor',
  valor_2: 'valor_2',
  observacao: 'observacao',
  ged: 'ged'
};

exports.Prisma.VW_AUTORIZACOES_DESCONTOS_LOJAS_DEVScalarFieldEnum = {
  key: 'key',
  registro: 'registro',
  documento: 'documento',
  data: 'data',
  cliente: 'cliente',
  empresa: 'empresa',
  nome_fantasia: 'nome_fantasia',
  total_bruto: 'total_bruto',
  desconto_comercial: 'desconto_comercial',
  valor: 'valor',
  valor_2: 'valor_2',
  desconto: 'desconto',
  desconto_perc: 'desconto_perc',
  valor_liquido: 'valor_liquido',
  valor_liquido_2: 'valor_liquido_2',
  desconto_total: 'desconto_total',
  observacao: 'observacao'
};

exports.Prisma.VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEVScalarFieldEnum = {
  key: 'key',
  registro: 'registro',
  empresa: 'empresa',
  nome_fantasia: 'nome_fantasia',
  data_hora: 'data_hora',
  movimento: 'movimento',
  prevenda: 'prevenda',
  valor: 'valor',
  valor_2: 'valor_2',
  observacao: 'observacao'
};

exports.Prisma.VW_AUTORIZACOES_SAIDAS_AVULSAS_DEVScalarFieldEnum = {
  key: 'key',
  registro: 'registro',
  data: 'data',
  centro_estoque: 'centro_estoque',
  empresa: 'empresa',
  filial: 'filial',
  id_usuario: 'id_usuario',
  usuario: 'usuario',
  quantidade: 'quantidade',
  observacao: 'observacao'
};

exports.Prisma.AUTORIZACOES_WEB_BARRAMENTOS_DEVScalarFieldEnum = {
  id: 'id',
  registro: 'registro',
  cod_origem: 'cod_origem',
  origem: 'origem',
  data_hora: 'data_hora',
  autorizado: 'autorizado',
  importado: 'importado',
  data_hora_importado: 'data_hora_importado',
  mensagem: 'mensagem',
  data_hora_mensagem: 'data_hora_mensagem',
  usuario: 'usuario'
};

exports.Prisma.VW_APP_VENDAS_LOJAS_NEWScalarFieldEnum = {
  key: 'key',
  loja: 'loja',
  descricao: 'descricao',
  descricao_completa: 'descricao_completa',
  segmento: 'segmento',
  media_pcs_ano: 'media_pcs_ano',
  media_venda_ano: 'media_venda_ano',
  media_venda_ano_varejo: 'media_venda_ano_varejo',
  media_venda_ano_atacado: 'media_venda_ano_atacado',
  media_venda_ano_site: 'media_venda_ano_site',
  venda_dia_loja: 'venda_dia_loja',
  venda_dia_anterior_loja: 'venda_dia_anterior_loja',
  venda_mes_loja: 'venda_mes_loja',
  venda_mes_anterior_loja: 'venda_mes_anterior_loja',
  venda_dia_atacado: 'venda_dia_atacado',
  venda_dia_anterior_atacado: 'venda_dia_anterior_atacado',
  ind_venda_dia_atacado: 'ind_venda_dia_atacado',
  dif_venda_dia_atacado: 'dif_venda_dia_atacado',
  venda_dia_varejo: 'venda_dia_varejo',
  venda_dia_anterior_varejo: 'venda_dia_anterior_varejo',
  ind_venda_dia_varejo: 'ind_venda_dia_varejo',
  dif_venda_dia_varejo: 'dif_venda_dia_varejo',
  venda_dia_ecommerce: 'venda_dia_ecommerce',
  venda_dia_anterior_ecommerce: 'venda_dia_anterior_ecommerce',
  ind_venda_dia_ecommerce: 'ind_venda_dia_ecommerce',
  dif_venda_dia_ecommerce: 'dif_venda_dia_ecommerce',
  venda_dia: 'venda_dia',
  venda_dia_anterior: 'venda_dia_anterior',
  ind_venda_dia: 'ind_venda_dia',
  dif_venda_dia: 'dif_venda_dia',
  venda_mes_atacado: 'venda_mes_atacado',
  venda_mes_anterior_atacado: 'venda_mes_anterior_atacado',
  ind_venda_mes_atacado: 'ind_venda_mes_atacado',
  dif_venda_mes_atacado: 'dif_venda_mes_atacado',
  venda_mes_varejo: 'venda_mes_varejo',
  venda_mes_anterior_varejo: 'venda_mes_anterior_varejo',
  ind_venda_mes_varejo: 'ind_venda_mes_varejo',
  dif_venda_mes_varejo: 'dif_venda_mes_varejo',
  venda_mes_ecommerce: 'venda_mes_ecommerce',
  venda_mes_anterior_ecommerce: 'venda_mes_anterior_ecommerce',
  ind_venda_mes_ecommerce: 'ind_venda_mes_ecommerce',
  dif_venda_mes_ecommerce: 'dif_venda_mes_ecommerce',
  venda_mes: 'venda_mes',
  venda_mes_anterior: 'venda_mes_anterior',
  ind_venda_mes: 'ind_venda_mes',
  dif_venda_mes: 'dif_venda_mes',
  quant_pcs_mes_atacado: 'quant_pcs_mes_atacado',
  quant_pcs_mes_anterior_atacado: 'quant_pcs_mes_anterior_atacado',
  ind_quant_pcs_mes_atacado: 'ind_quant_pcs_mes_atacado',
  dif_quant_pcs_mes_atacado: 'dif_quant_pcs_mes_atacado',
  quant_pcs_mes_varejo: 'quant_pcs_mes_varejo',
  quant_pcs_mes_anterior_varejo: 'quant_pcs_mes_anterior_varejo',
  ind_quant_pcs_mes_varejo: 'ind_quant_pcs_mes_varejo',
  dif_quant_pcs_mes_varejo: 'dif_quant_pcs_mes_varejo',
  quant_pcs_mes_ecommerce: 'quant_pcs_mes_ecommerce',
  quant_pcs_mes_anterior_ecommerce: 'quant_pcs_mes_anterior_ecommerce',
  ind_quant_pcs_mes_ecommerce: 'ind_quant_pcs_mes_ecommerce',
  dif_quant_pcs_mes_ecommerce: 'dif_quant_pcs_mes_ecommerce',
  quant_pcs_mes: 'quant_pcs_mes',
  quant_pcs_mes_anterior: 'quant_pcs_mes_anterior',
  ind_quant_pcs_mes: 'ind_quant_pcs_mes',
  dif_quant_pcs_mes: 'dif_quant_pcs_mes',
  pm_atacado: 'pm_atacado',
  pm_varejo: 'pm_varejo',
  pm_ecommerce: 'pm_ecommerce',
  meta: 'meta',
  ultima_atualizacao: 'ultima_atualizacao'
};

exports.Prisma.VW_APP_VENDAS_CUPONS_NEWScalarFieldEnum = {
  key: 'key',
  loja: 'loja',
  nome_fantasia: 'nome_fantasia',
  total_venda: 'total_venda',
  total_venda_format: 'total_venda_format',
  total_cupom: 'total_cupom',
  total_cupom_format: 'total_cupom_format',
  perc: 'perc',
  total_venda_anterior: 'total_venda_anterior',
  total_venda_anterior_format: 'total_venda_anterior_format',
  total_cupom_anterior: 'total_cupom_anterior',
  total_cupom_anterior_format: 'total_cupom_anterior_format',
  perc_anterior: 'perc_anterior'
};

exports.Prisma.VW_APP_VENDAS_MES_NEWScalarFieldEnum = {
  key: 'key',
  empresa: 'empresa',
  nome_fantasia: 'nome_fantasia',
  mes: 'mes',
  mes_atual: 'mes_atual',
  t2024: 't2024',
  pm2024: 'pm2024',
  t2023: 't2023',
  pm2023: 'pm2023',
  t2022: 't2022',
  pm2022: 'pm2022',
  t2021: 't2021',
  pm2021: 'pm2021',
  ultima_atualizacao: 'ultima_atualizacao'
};

exports.Prisma.VW_APP_ESTOQUE_LOJAS_NEWScalarFieldEnum = {
  key: 'key',
  empresa: 'empresa',
  descricao: 'descricao',
  cod_marca: 'cod_marca',
  marca: 'marca',
  cod_colecao: 'cod_colecao',
  colecao: 'colecao',
  dmetal: 'dmetal',
  chica: 'chica',
  chiquinha: 'chiquinha',
  morah: 'morah',
  jeans: 'jeans',
  malha: 'malha',
  plano: 'plano',
  total: 'total'
};

exports.Prisma.VW_APP_CONTROLE_FACCOES_NEWScalarFieldEnum = {
  key: 'key',
  cod_colecao: 'cod_colecao',
  colecao: 'colecao',
  entidade: 'entidade',
  supervisor: 'supervisor',
  qtde_faccoes: 'qtde_faccoes',
  qtde_pecas_enviadas: 'qtde_pecas_enviadas',
  retorno_dia: 'retorno_dia',
  retorno_dia_anterior: 'retorno_dia_anterior',
  retorno_dia_inter: 'retorno_dia_inter',
  retorno_mes: 'retorno_mes',
  retorno_mes_inter: 'retorno_mes_inter',
  retorno_mes_anterior: 'retorno_mes_anterior',
  retorno_mes_anterior_inter: 'retorno_mes_anterior_inter',
  qtde_op: 'qtde_op',
  data_op_antiga: 'data_op_antiga'
};

exports.Prisma.VW_APP_REP_SOLICITACAO_FATURAMENTO_NEWScalarFieldEnum = {
  key: 'key',
  mes: 'mes',
  data: 'data',
  total_processado: 'total_processado',
  total_pecas_processado: 'total_pecas_processado',
  total_nao_processado: 'total_nao_processado',
  total_pecas_nao_processado: 'total_pecas_nao_processado',
  total_solicitado: 'total_solicitado',
  total_pecas: 'total_pecas'
};

exports.Prisma.VW_APP_REPRESENTANTES_DMETAL_RESUMO_NEWScalarFieldEnum = {
  key: 'key',
  colecao: 'colecao',
  estoque: 'estoque',
  pedidos: 'pedidos',
  ind_pedidos: 'ind_pedidos',
  dif_pedidos: 'dif_pedidos',
  pecas: 'pecas',
  pecas_anterior: 'pecas_anterior',
  ind_pecas: 'ind_pecas',
  dif_pecas: 'dif_pecas',
  valor: 'valor',
  valor_anterior: 'valor_anterior',
  ind_valor: 'ind_valor',
  dif_valor: 'dif_valor',
  pedidos_faturado: 'pedidos_faturado',
  pedidos_faturado_anterior: 'pedidos_faturado_anterior',
  ind_pedidos_faturado: 'ind_pedidos_faturado',
  dif_pedidos_faturado: 'dif_pedidos_faturado',
  pecas_gerencial: 'pecas_gerencial',
  pecas_gerencial_anterior: 'pecas_gerencial_anterior',
  ind_pecas_gerencial: 'ind_pecas_gerencial',
  dif_pecas_gerencial: 'dif_pecas_gerencial',
  venda_gerencial: 'venda_gerencial',
  venda_gerencial_anterior: 'venda_gerencial_anterior',
  ind_venda_gerencial: 'ind_venda_gerencial',
  dif_venda_gerencial: 'dif_venda_gerencial',
  pecas_faturado: 'pecas_faturado',
  pecas_faturado_anterior: 'pecas_faturado_anterior',
  ind_pecas_faturado: 'ind_pecas_faturado',
  dif_pecas_faturado: 'dif_pecas_faturado',
  perc_pecas_faturado: 'perc_pecas_faturado',
  valor_faturado: 'valor_faturado',
  valor_faturado_anterior: 'valor_faturado_anterior',
  ind_valor_faturado: 'ind_valor_faturado',
  dif_valor_faturado: 'dif_valor_faturado',
  perc_valor_faturado: 'perc_valor_faturado',
  ultima_atualizacao: 'ultima_atualizacao'
};

exports.Prisma.VW_APP_REPRESENTANTES_CHICA_RESUMO_NEWScalarFieldEnum = {
  key: 'key',
  colecao: 'colecao',
  estoque: 'estoque',
  pedidos: 'pedidos',
  ind_pedidos: 'ind_pedidos',
  dif_pedidos: 'dif_pedidos',
  pecas: 'pecas',
  pecas_anterior: 'pecas_anterior',
  ind_pecas: 'ind_pecas',
  dif_pecas: 'dif_pecas',
  valor: 'valor',
  valor_anterior: 'valor_anterior',
  ind_valor: 'ind_valor',
  dif_valor: 'dif_valor',
  pedidos_faturado: 'pedidos_faturado',
  pedidos_faturado_anterior: 'pedidos_faturado_anterior',
  ind_pedidos_faturado: 'ind_pedidos_faturado',
  dif_pedidos_faturado: 'dif_pedidos_faturado',
  pecas_gerencial: 'pecas_gerencial',
  pecas_gerencial_anterior: 'pecas_gerencial_anterior',
  ind_pecas_gerencial: 'ind_pecas_gerencial',
  dif_pecas_gerencial: 'dif_pecas_gerencial',
  venda_gerencial: 'venda_gerencial',
  venda_gerencial_anterior: 'venda_gerencial_anterior',
  ind_venda_gerencial: 'ind_venda_gerencial',
  dif_venda_gerencial: 'dif_venda_gerencial',
  pecas_faturado: 'pecas_faturado',
  pecas_faturado_anterior: 'pecas_faturado_anterior',
  ind_pecas_faturado: 'ind_pecas_faturado',
  dif_pecas_faturado: 'dif_pecas_faturado',
  perc_pecas_faturado: 'perc_pecas_faturado',
  valor_faturado: 'valor_faturado',
  valor_faturado_anterior: 'valor_faturado_anterior',
  ind_valor_faturado: 'ind_valor_faturado',
  dif_valor_faturado: 'dif_valor_faturado',
  perc_valor_faturado: 'perc_valor_faturado',
  ultima_atualizacao: 'ultima_atualizacao'
};

exports.Prisma.VW_APP_REPRESENTANTES_CHICA_MAPA_NEWScalarFieldEnum = {
  key: 'key',
  nome: 'nome',
  qtde: 'qtde',
  qtde_pecas: 'qtde_pecas',
  valor: 'valor',
  qtde_faturado: 'qtde_faturado',
  pecas_faturado: 'pecas_faturado',
  valor_faturado: 'valor_faturado',
  qtde_venda_gerencial: 'qtde_venda_gerencial',
  valor_venda_gerencial: 'valor_venda_gerencial'
};

exports.Prisma.VW_APP_REPRESENTANTES_DMETAL_MAPA_NEWScalarFieldEnum = {
  key: 'key',
  nome: 'nome',
  qtde: 'qtde',
  qtde_pecas: 'qtde_pecas',
  valor: 'valor',
  qtde_faturado: 'qtde_faturado',
  pecas_faturado: 'pecas_faturado',
  valor_faturado: 'valor_faturado',
  qtde_venda_gerencial: 'qtde_venda_gerencial',
  valor_venda_gerencial: 'valor_venda_gerencial'
};

exports.Prisma.VW_APP_REPRESENTANTES_CHICA_SEMANA_NEWScalarFieldEnum = {
  key: 'key',
  id: 'id',
  ordem: 'ordem',
  semana: 'semana',
  qtde_pecas: 'qtde_pecas'
};

exports.Prisma.VW_APP_REPRESENTANTES_DMETAL_SEMANA_NEWScalarFieldEnum = {
  key: 'key',
  id: 'id',
  ordem: 'ordem',
  semana: 'semana',
  qtde_pecas: 'qtde_pecas'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  VW_AUTORIZACOES_WEB_DEV: 'VW_AUTORIZACOES_WEB_DEV',
  VW_AUTORIZACOES_DESPESAS_COFRE_DEV: 'VW_AUTORIZACOES_DESPESAS_COFRE_DEV',
  VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV: 'VW_AUTORIZACOES_DESCONTOS_LOJAS_DEV',
  VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV: 'VW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV',
  VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV: 'VW_AUTORIZACOES_SAIDAS_AVULSAS_DEV',
  AUTORIZACOES_WEB_BARRAMENTOS_DEV: 'AUTORIZACOES_WEB_BARRAMENTOS_DEV',
  VW_APP_VENDAS_LOJAS_NEW: 'VW_APP_VENDAS_LOJAS_NEW',
  VW_APP_VENDAS_CUPONS_NEW: 'VW_APP_VENDAS_CUPONS_NEW',
  VW_APP_VENDAS_MES_NEW: 'VW_APP_VENDAS_MES_NEW',
  VW_APP_ESTOQUE_LOJAS_NEW: 'VW_APP_ESTOQUE_LOJAS_NEW',
  VW_APP_CONTROLE_FACCOES_NEW: 'VW_APP_CONTROLE_FACCOES_NEW',
  VW_APP_REP_SOLICITACAO_FATURAMENTO_NEW: 'VW_APP_REP_SOLICITACAO_FATURAMENTO_NEW',
  VW_APP_REPRESENTANTES_DMETAL_RESUMO_NEW: 'VW_APP_REPRESENTANTES_DMETAL_RESUMO_NEW',
  VW_APP_REPRESENTANTES_CHICA_RESUMO_NEW: 'VW_APP_REPRESENTANTES_CHICA_RESUMO_NEW',
  VW_APP_REPRESENTANTES_CHICA_MAPA_NEW: 'VW_APP_REPRESENTANTES_CHICA_MAPA_NEW',
  VW_APP_REPRESENTANTES_DMETAL_MAPA_NEW: 'VW_APP_REPRESENTANTES_DMETAL_MAPA_NEW',
  VW_APP_REPRESENTANTES_CHICA_SEMANA_NEW: 'VW_APP_REPRESENTANTES_CHICA_SEMANA_NEW',
  VW_APP_REPRESENTANTES_DMETAL_SEMANA_NEW: 'VW_APP_REPRESENTANTES_DMETAL_SEMANA_NEW'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
