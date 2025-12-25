# 📊 Zabbix + Grafana com Docker

Este projeto tem como objetivo subir um ambiente completo de **monitoramento** utilizando **Zabbix** e **Grafana**, todos executando em **containers Docker**, facilitando a instalação, manutenção e portabilidade do ambiente.

---

## 🚀 Tecnologias Utilizadas

* **Docker**
* **Docker Compose**
* **Zabbix Server**
* **Zabbix Agent**
* **Grafana**
* **MySQL / PostgreSQL** (dependendo da configuração)
* **Linux Server**

---

## 📁 Estrutura do Projeto

```
.
├── docker-compose.yml
├── zabbix/
│   ├── server
│   └── agent
├── grafana/
│   └── data
└── README.md
```
<img width="1013" height="517" alt="image" src="https://github.com/user-attachments/assets/387ab412-1c59-4e06-8a0c-70f04175e734" />
 
---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

* Docker
* Docker Compose

Verifique com os comandos:

```bash
docker --version
docker-compose --version
```

---

## ▶️ Subindo o Ambiente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Suba os containers:

```bash
docker-compose up -d
```

3. Verifique se os containers estão rodando:

```bash
docker ps
```

---

## 🌐 Acessos

### Zabbix Web

* URL: `http://IP_DO_SERVIDOR:8080`
* Usuário padrão: `Admin`
* Senha padrão: `zabbix`

### Grafana

* URL: `http://IP_DO_SERVIDOR:3000`
* Usuário padrão: `admin`
* Senha padrão: `admin`

---

## 📈 Integração Zabbix + Grafana

1. No Grafana, adicione uma nova **Data Source**
2. Selecione **Zabbix**
3. Configure a URL da API do Zabbix:

```
http://zabbix-server:8080/api_jsonrpc.php
```

4. Informe usuário e senha do Zabbix
5. Salve e teste a conexão

---

## 🧠 Observações Importantes

* As portas podem ser ajustadas no `docker-compose.yml`
* Certifique-se de que o **Zabbix Agent** consegue se comunicar com o **Zabbix Server**
* Em ambientes com firewall, libere as portas:

  * `10050` (Agent)
  * `10051` (Server)
  * `3000` (Grafana)

---

## 🛠️ Comandos Úteis

```bash
# Parar os containers
docker-compose down

# Ver logs
docker-compose logs -f

# Reiniciar serviços
docker-compose restart
```

---

## 📌 Próximos Passos

* Criar dashboards personalizados no Grafana
* Monitorar servidores Windows e Linux
* Integrar alertas por e-mail ou WhatsApp
* Persistência de dados com volumes nomeados

---

## 👨‍💻 Autor

**Carlos Breno**
Profissional de TI | Suporte & Desenvolvimento
Projeto voltado para estudos e aplicação prática de monitoramento em ambientes reais.

---

✅ *Projeto ideal para estudos, laboratórios e pequenas/médias empresas.*
