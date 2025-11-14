"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  CheckCircle2,
  Globe2,
  Layers3,
  LineChart,
  Mail,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

const heroMetrics = [
  {
    label: "Casos analisados por mês",
    value: "12.500+",
    description: "IA classifica prioridade e risco em segundos.",
  },
  {
    label: "Conversão em contratos",
    value: "4,6x",
    description: "Advogados parceiros com agenda otimizada via SmartJus.",
  },
  {
    label: "Tempo médio de resposta",
    value: "7 min",
    description: "Contato humanizado após qualificação automática.",
  },
];

const workflow = [
  {
    title: "Captação inteligente",
    description:
      "Aquisição multicanal conectada a dados de mercado e campanhas dinâmicas.",
    icon: Sparkles,
  },
  {
    title: "Qualificação com IA proprietária",
    description:
      "Robôs jurídicos analisam contexto, jurisprudência relevante e score de sucesso.",
    icon: BrainCircuit,
  },
  {
    title: "Operação em rede",
    description:
      "Distribuição automática para o advogado ideal, com playbooks e SLAs monitorados.",
    icon: Users,
  },
  {
    title: "Performance e reporting",
    description:
      "Dashboards em tempo real, benchmarks de fee e previsibilidade financeira.",
    icon: LineChart,
  },
];

const differentiators = [
  {
    title: "Pipeline sempre cheio",
    description:
      "Receba leads qualificados e contextualizados, prontos para avançar no atendimento.",
    icon: Globe2,
  },
  {
    title: "Playbooks proprietários",
    description:
      "Modelos e precedentes atualizados para acelerar petições, acordos e audiências.",
    icon: Layers3,
  },
  {
    title: "Compliance e segurança",
    description:
      "Gestão ponta a ponta com LGPD, trilhas de auditoria e termos digitais assináveis.",
    icon: ShieldCheck,
  },
  {
    title: "Resultados comprovados",
    description:
      "Acompanhamento de NPS, retorno financeiro e tempo de ciclo para cada caso.",
    icon: BadgeCheck,
  },
];

const testimonials = [
  {
    quote:
      "A SmartJus transformou nosso escritório em uma operação de alta performance. Leads chegam prontos, com dados que meu time jamais conseguiria levantar manualmente.",
    author: "Mariana Carvalho",
    role: "Sócia fundadora • Carvalho & Associados",
  },
  {
    quote:
      "A inteligência da plataforma direciona o time certo para cada demanda. Reduzimos 38% do tempo de onboarding e crescemos a carteira sem perder qualidade.",
    author: "Rodrigo Vasques",
    role: "Head Jurídico • Cluster Holding",
  },
];

const faq = [
  {
    question: "Como funciona a parceria para advogados?",
    answer:
      "Você atua como especialista na sua área. A SmartJus entrega o pipeline qualificado, playbooks, tecnologia de acompanhamento e suporte operacional para que o seu foco seja a estratégia jurídica.",
  },
  {
    question: "Qual é o critério de seleção da rede de parceiros?",
    answer:
      "Analisamos histórico de performance, áreas de atuação, capacidade de entrega, aderência tecnológica e compromisso com SLAs. Também avaliamos compliance, certificações e soft skills de atendimento.",
  },
  {
    question: "Posso integrar meus sistemas atuais?",
    answer:
      "Sim. Oferecemos integrações via API e conectores prontos com CRMs jurídicos, ERPs financeiros e aplicativos de produtividade para sincronizar dados em tempo real.",
  },
  {
    question: "A plataforma atende clientes finais?",
    answer:
      "Sim. Captamos leads qualificados de pessoas físicas e jurídicas, conduzimos a qualificação automática e conectamos com o advogado parceiro certo para cada caso.",
  },
];

const partnerLogos = [
  "Projuris Insights",
  "LexData Network",
  "Atlas Capital",
  "Nova Justiça Lab",
  "Focus Ventures",
  "Vector Analytics",
];

type LeadKind = "parceiro" | "cliente";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
} as const;

export default function Home() {
  const [leadKind, setLeadKind] = useState<LeadKind>("parceiro");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [formVariant, setFormVariant] = useState<"success" | "error" | null>(
    null,
  );

  const heroGradient = useMemo(
    () =>
      "bg-[radial-gradient(circle_at_top,_rgba(74,120,255,0.28),_rgba(9,12,26,0)_55%)]",
    [],
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
          leadKind,
        }),
      });

      if (!response.ok) {
        throw new Error("Não foi possível enviar agora.");
      }

      setFormVariant("success");
      setFormMessage("Recebemos seu contato! Em breve, nossa equipe fala com você.");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setFormVariant("error");
      setFormMessage(
        "Houve um problema no envio. Tente novamente em instantes ou fale com a nossa equipe em contato@smartjus.io.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[10%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-16 top-1/2 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute -right-16 bottom-0 h-[22rem] w-[22rem] rounded-full bg-primary/15 blur-[120px]" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-28 px-6 pb-24 pt-20 sm:px-10 lg:px-16">
        <header className={`relative overflow-hidden rounded-3xl border border-white/5 bg-surface/80 ${heroGradient} p-10 shadow-[0_25px_120px_rgba(12,20,37,0.65)] backdrop-blur-3xl`}>
          <div className="absolute right-6 top-6 hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wide text-white/70 sm:block">
            Legal tech de alta performance
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent">
                Direito em escala
                <span aria-hidden>•</span>
                Inteligência em cada caso
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                IA e rede de especialistas para transformar advocacia em alta performance.
              </h1>
              <p className="text-lg text-slate-200 lg:text-xl">
                A SmartJus combina tecnologia proprietária, dados e uma rede nacional de advogados parceiros para captar, qualificar e operar casos com velocidade e precisão.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#lead"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-strong px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_45px_rgba(36,64,175,0.45)] transition hover:shadow-[0_18px_60px_rgba(36,64,175,0.6)]"
                >
                  Quero ser parceiro SmartJus
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                >
                  Agendar demonstração
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="grid h-full w-full max-w-sm grid-cols-1 gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80 backdrop-blur-xl"
            >
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                >
                  <p className="text-xs uppercase tracking-wide text-white/60">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    {metric.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </header>

        <motion.section
          {...fadeInUp}
          className="rounded-3xl border border-white/10 bg-surface/80 p-10 shadow-[0_22px_90px_rgba(10,18,40,0.55)] backdrop-blur-3xl"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl font-semibold text-white">
                Como a SmartJus acelera seu ciclo jurídico
              </h2>
              <p className="text-slate-300">
                Orquestramos toda a jornada: da captação ao pós-entrega. Tecnologia orientada a dados, governança e pessoas certas em cada etapa.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-white"
            >
              Ver agenda de onboarding
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {workflow.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
              >
                <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-primary/10 blur-2xl" />
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl border border-white/10 bg-primary/10 p-2 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeInUp}
          className="grid gap-10 rounded-3xl border border-white/10 bg-surface/75 p-10 shadow-[0_20px_80px_rgba(6,12,30,0.5)] backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Por que escritórios e departamentos jurídicos escolhem a SmartJus
            </h2>
            <p className="text-slate-300">
              Conectamos pessoas, dados e automações. Seus clientes finais percebem uma experiência moderna e confiável. Seu time ganha previsibilidade, escala e margem.
            </p>
            <div className="grid gap-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-white/25 hover:bg-white/10"
                >
                  <div className="rounded-2xl border border-white/10 bg-accent/10 p-2 text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-primary/5 p-8 text-white shadow-[0_25px_80px_rgba(15,27,56,0.45)]">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Motor de crescimento jurídico
              </h3>
              <p className="text-sm text-slate-200">
                Um cockpit único para parceiros: previsões de receita, status dos casos, benchmarks de honorários, insights de carteira e alertas de oportunidade.
              </p>
              <div className="grid gap-4 text-sm text-white/80">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>Forecast mensal alimentado por dados reais de conversão.</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>Alertas de governança e SLA com prazos críticos.</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>Analytics de performance comparativo por área e região.</span>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-6">
              <p className="text-xs uppercase tracking-wide text-white/60">
                Rede verificada
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">
                280+ advogados parceiros em 16 estados
              </p>
              <p className="mt-3 text-sm text-slate-200">
                Aceleramos escritórios especializados, boutiques e departamentos jurídicos de empresas de alto crescimento.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...fadeInUp}
          className="rounded-3xl border border-white/10 bg-surface/80 p-10 backdrop-blur-3xl"
        >
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-semibold text-white">
              Parceiros e fundos que confiam
            </h2>
            <p className="text-sm text-slate-300">
              O ecossistema SmartJus reúne inteligências estratégicas, capital e tecnologia aplicada ao direito.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnerLogos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-base font-medium uppercase tracking-wide text-white/70 transition hover:border-white/20 hover:bg-white/10"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...fadeInUp}
          className="grid gap-10 rounded-3xl border border-white/10 bg-surface/80 p-10 backdrop-blur-3xl lg:grid-cols-2"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Inteligência que gera confiança em cada contato
            </h2>
            <p className="text-slate-300">
              Combinação entre machine learning, dados públicos, jurisprudência e acompanhamento humano. O resultado é uma jornada fluida para clientes finais e parceiros.
            </p>
            <div className="space-y-5">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200"
                >
                  <p className="text-base text-white/90">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-4 text-xs uppercase tracking-wide text-white/60">
                    {testimonial.author} • {testimonial.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="lead"
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 via-primary/5 to-white/5 p-8 shadow-[0_25px_80px_rgba(13,25,55,0.6)]"
          >
            <div className="absolute -left-10 top-14 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -right-12 bottom-16 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent">
                Lead qualification engine
              </span>
              <h3 className="text-2xl font-semibold text-white">
                Receba leads ou encaminhe casos para a SmartJus
              </h3>
              <p className="text-sm text-slate-100">
                Escolha o fluxo e conte um pouco sobre sua operação. Garantimos resposta rápida com um plano personalizado.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs font-semibold">
                {(["parceiro", "cliente"] as LeadKind[]).map((kind) => (
                  <button
                    key={kind}
                    type="button"
                    onClick={() => setLeadKind(kind)}
                    className={`rounded-2xl border px-4 py-3 capitalize transition ${
                      leadKind === kind
                        ? "border-white/30 bg-white/20 text-white shadow-[0_10px_30px_rgba(34,75,255,0.35)]"
                        : "border-white/15 bg-white/5 text-white/60 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    {kind === "parceiro"
                      ? "Sou advogado parceiro"
                      : "Tenho um caso para indicar"}
                  </button>
                ))}
              </div>
              <form
                id="contact"
                className="space-y-4 text-sm"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-wide text-white/60">
                      Nome completo
                    </span>
                    <input
                      required
                      name="name"
                      placeholder="Seu nome"
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/40"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-wide text-white/60">
                      E-mail corporativo
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="nome@empresa.com"
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/40"
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-wide text-white/60">
                      Telefone/WhatsApp
                    </span>
                    <input
                      name="phone"
                      placeholder="(11) 99999-0000"
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/40"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-wide text-white/60">
                      Escritório ou empresa
                    </span>
                    <input
                      name="company"
                      placeholder="Nome da organização"
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/40"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-wide text-white/60">
                    Conte sobre o momento atual
                  </span>
                  <textarea
                    name="message"
                    placeholder="Áreas de atuação, volume de casos, desafios..."
                    rows={4}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/40"
                  />
                </label>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-strong px-6 py-3 text-sm font-semibold text-slate-900 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Enviando..." : "Falar com o time SmartJus"}
                  <ArrowRight className="h-4 w-4" />
                </button>
                {formMessage && (
                  <div
                    className={`rounded-2xl border px-4 py-3 text-xs ${
                      formVariant === "success"
                        ? "border-accent/40 bg-accent/10 text-accent"
                        : "border-red-400/40 bg-red-500/10 text-red-200"
                    }`}
                  >
                    {formMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...fadeInUp}
          className="rounded-3xl border border-white/10 bg-surface/80 p-10 backdrop-blur-3xl"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl font-semibold text-white">
                Perguntas frequentes
              </h2>
              <p className="text-sm text-slate-300">
                Se preferir conversar diretamente, fale com nossa equipe pelo WhatsApp ou e-mail.
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <Link
                href="mailto:contato@smartjus.io"
                className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-white/80 transition hover:border-white/30 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                contato@smartjus.io
              </Link>
              <Link
                href="https://wa.me/5511999990000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-white/80 transition hover:border-white/30 hover:text-white"
              >
                <PhoneCall className="h-4 w-4" />
                (11) 99999-0000
              </Link>
            </div>
          </div>
          <div className="mt-10 space-y-4">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white">
                  {item.question}
                  <MessageSquare className="h-4 w-4 text-white/60 transition group-open:rotate-90 group-open:text-accent" />
                </summary>
                <p className="mt-3 text-sm text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </motion.section>

        <footer className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 via-primary/15 to-accent/10 px-8 py-12 text-white shadow-[0_25px_90px_rgba(8,16,40,0.55)]">
          <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-white/20 blur-[140px]" />
          <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-accent/30 blur-[160px]" />
          <div className="relative flex flex-col gap-6 text-center">
            <span className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80">
              SmartJus
            </span>
            <h2 className="text-3xl font-semibold lg:text-4xl">
              Direito em escala. Inteligência em cada caso.
            </h2>
            <p className="text-sm text-white/80 lg:text-base">
              Seja parte da rede jurídica que une pessoas e dados para entregar resultados consistentes, previsíveis e humanos.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#lead"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
              >
                Fazer parte da rede SmartJus
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="mailto:parcerias@smartjus.io"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/50 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                parcerias@smartjus.io
              </Link>
            </div>
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} SmartJus. Plataforma jurídica digital orientada a dados. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
