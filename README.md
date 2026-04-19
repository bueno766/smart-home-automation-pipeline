# 🏠 Smart Home Automation Pipeline (n8n + Home Assistant)

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
```
<img width="1088" height="577" alt="image" src="https://github.com/user-attachments/assets/dbd3d7d8-9119-4aaa-b872-458bb11f0b26" /><br>

<img width="1088" height="568" alt="image" src="https://github.com/user-attachments/assets/ac290cc1-64c6-4d55-a69a-30b91e6b832e" /><br>


---

## 2. Processamento no n8n

O n8n:
- Recebe o webhook
- Valida a ação (ON / OFF)
- Executa lógica condicional (IF node)
- Direciona para a API do Home Assistant

<img width="1917" height="861" alt="image" src="https://github.com/user-attachments/assets/dddbb289-b79b-4011-9325-fc102bfed7a6" /><br>

<img width="1854" height="792" alt="image" src="https://github.com/user-attachments/assets/6cac16ae-022a-4068-bb4b-782f496766e3" /><br>

---

## 3. Execução no Home Assistant

O Home Assistant recebe a requisição REST e executa a ação no dispositivo:

Liga ou desliga o LED
Atualiza estado da entidade
Sincroniza status em tempo real

💡 Dispositivo Controlado: light.led_sala

<img width="1912" height="861" alt="image" src="https://github.com/user-attachments/assets/abf47bf0-589a-4bb7-9533-e496098739c4" /><br>

<img width="1911" height="870" alt="image" src="https://github.com/user-attachments/assets/9d2c976e-f042-42d0-8604-0b1c54fde03d" /><br>

<img width="1911" height="852" alt="image" src="https://github.com/user-attachments/assets/7746ca5a-6f6f-4bdd-bc39-c1aa36c65eab" /><br>

<img width="1902" height="860" alt="image" src="https://github.com/user-attachments/assets/6d526441-6af3-44f3-bbed-f5a1d27036c1" /><br>


## 🔌 Endpoints Utilizados

Home Assistant REST API:

- POST /api/services/light/turn_on
- POST /api/services/light/turn_off

Payload padrão
{
  "entity_id": "light.led_sala"
}

---

## 4. IoT Integration (Alexa Smart Home)

A integração com Alexa foi utilizada para validar o controle de dispositivos via Home Assistant.

A entidade `light.led_sala` foi exposta através do Home Assistant Cloud (Nabu Casa), permitindo controle por voz e interface da Alexa.

<img width="350" height="658" alt="image" src="https://github.com/user-attachments/assets/ab5c71c5-3040-4d43-b7b7-2b6eb80799b5" /><br>

<img width="591" height="1280" alt="image" src="https://github.com/user-attachments/assets/43a3b7e0-d782-4004-9b30-75c3d0459d8e" /><br>

<img width="591" height="1280" alt="image" src="https://github.com/user-attachments/assets/e8b2c538-967c-4ddf-bfb1-6d58506e4f68" /><br>

<img width="591" height="1280" alt="image" src="https://github.com/user-attachments/assets/d892815a-55f4-4070-8811-3fc3077fadd9" /><br>

---

## 🏠 Home Assistant (Papel no Sistema)

O Home Assistant atua como camada de execução IoT, responsável por:

- Controlar dispositivos inteligentes
- Expor API REST para automações externas
- Gerenciar estados de entidades
- Executar ações em tempo real
- Entidade utilizada: light.led_sala

---

## 🔁 n8n (Papel no Sistema)

O n8n é responsável por:
- Receber requisições via Webhook
- Processar lógica condicional (IF ON/OFF)
- Encaminhar comandos para o Home Assistant
- Orquestrar o fluxo de automação

---

## 🧪 Casos de Uso

- Controle de iluminação inteligente
- Automação residencial baseada em eventos
- Integração entre sistemas via API
- Orquestração de fluxos com n8n
- Execução de comandos IoT via Home Assistant

---

## 🧠 Principais Aprendizados

- Arquitetura event-driven
- Integração de APIs REST
- Automação de workflows com n8n
- Controle de dispositivos IoT
- Debug de requisições HTTP
- Estruturação de sistemas distribuídos

---

## ⚠️ Problemas Resolvidos

- Mapeamento correto de entidades no Home Assistant
- Ajuste de payload JSON em requisições HTTP
- Integração n8n → Home Assistant via API
- Correção de lógica IF em webhook
- Debug de estados de dispositivos IoT

---

## 🚀 Possíveis Evoluções

- Integração com Alexa / Google Home
- Controle via Telegram bot
- Dashboard web para automação
- Integração com MQTT
- Sistema de logs e histórico de eventos

---

👨‍💻 Autor

- Miguel Bueno
- Projeto de automação e integração de sistemas para portfólio técnico.
