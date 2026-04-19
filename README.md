# 🏠 Smart Home Automation Pipeline (n8n + Home Assistant)

![Architecture](./architecture/diagram.png)

Sistema de automação residencial baseado em arquitetura orientada a eventos (event-driven), integrando API Webhook, n8n como orquestrador de fluxos e Home Assistant como camada de execução IoT.

---

## 🚀 Visão Geral

Este projeto demonstra uma arquitetura real de automação residencial capaz de receber comandos externos via API e executar ações em dispositivos inteligentes.

A solução simula um sistema profissional de integração entre serviços, utilizando automação de workflows e controle de dispositivos IoT via REST API.

---

## 🧠 Arquitetura do Sistema

Fluxo principal:
POST Request (API / Postman / Webhook)
↓
smart-led-webhook-api
↓
n8n (Workflow Engine + lógica condicional)
↓
Home Assistant (REST API)
↓
light.led_sala (dispositivo IoT)


---

## ⚙️ Tecnologias Utilizadas

- n8n (Automation & Workflow Engine)
- Home Assistant (IoT Controller)
- REST API
- Webhooks HTTP
- JSON
- Docker (ambiente local)

---

## 🔁 Fluxo de Funcionamento

### 1. Entrada de dados
Uma requisição HTTP é enviada contendo a ação desejada:

```json
{
  "action": "on"
}

2. Processamento no n8n

O n8n:

Recebe o webhook
Valida a ação (ON / OFF)
Executa lógica condicional (IF node)
Direciona para a API do Home Assistant
3. Execução no Home Assistant

O Home Assistant recebe a requisição REST e executa a ação no dispositivo:

Liga ou desliga o LED
Atualiza estado da entidade
Sincroniza status em tempo real

💡 Dispositivo Controlado
light.led_sala
🔌 Endpoints Utilizados
Home Assistant REST API
POST /api/services/light/turn_on
POST /api/services/light/turn_off
Payload padrão
{
  "entity_id": "light.led_sala"
}

🏠 Home Assistant (Papel no Sistema)

O Home Assistant atua como camada de execução IoT, responsável por:

Controlar dispositivos inteligentes
Expor API REST para automações externas
Gerenciar estados de entidades
Executar ações em tempo real
Entidade utilizada:
light.led_sala
🔁 n8n (Papel no Sistema)

O n8n é responsável por:

Receber requisições via Webhook
Processar lógica condicional (IF ON/OFF)
Encaminhar comandos para o Home Assistant
Orquestrar o fluxo de automação
📊 Arquitetura
🧪 Casos de Uso
Controle de iluminação inteligente
Automação residencial baseada em eventos
Integração entre sistemas via API
Orquestração de fluxos com n8n
Execução de comandos IoT via Home Assistant
🧠 Principais Aprendizados
Arquitetura event-driven
Integração de APIs REST
Automação de workflows com n8n
Controle de dispositivos IoT
Debug de requisições HTTP
Estruturação de sistemas distribuídos
⚠️ Problemas Resolvidos
Mapeamento correto de entidades no Home Assistant
Ajuste de payload JSON em requisições HTTP
Integração n8n → Home Assistant via API
Correção de lógica IF em webhook
Debug de estados de dispositivos IoT
🚀 Possíveis Evoluções
Integração com Alexa / Google Home
Controle via Telegram bot
Dashboard web para automação
Integração com MQTT
Sistema de logs e histórico de eventos
👨‍💻 Autor

Miguel Bueno
Projeto de automação e integração de sistemas para portfólio técnico.
