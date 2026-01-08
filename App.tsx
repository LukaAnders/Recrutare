
import React, { useState, useEffect } from 'react';
import {
  Users,
  Target,
  ArrowRight,
  Phone,
  Mail,
  Menu,
  X,
  Search,
  Filter,
  FileText,
  Award,
  Clock,
  Briefcase,
  Crown,
  Sparkles,
  ShieldCheck,
  Check,
  Zap,
  ClipboardCheck,
  UserCheck,
  BrainCircuit,
  BarChart3,
  ChevronRight,
  Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';



const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const base = "px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap";
  const variants = {
    primary: "bg-[#1E40AF] text-white hover:bg-[#1e3a8a] shadow-lg shadow-blue-900/10",
    outline: "border-2 border-slate-200 text-slate-900 hover:bg-slate-50",
    white: "bg-white text-[#1E40AF] hover:bg-slate-100 shadow-xl"
  };
  return (
    <button className={`${base} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }: any) => (
  <div className={`bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden ${className}`}>
    {children}
  </div>
);

//Sections

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo-recru.png" alt="Recrutare Logo" className="h-10 md:h-12 w-auto object-contain" onError={(e) => {
            // Fallback caso a imagem não exista no ambiente atual
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML += '<span class="text-2xl font-black text-[#1E40AF]">RECRUTARE</span>';
          }} />
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Serviços', 'Metodologia', 'Franquias', 'Diferenciais'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-600 font-semibold hover:text-[#1E40AF] transition-colors">{item}</a>
          ))}
          <Button className="py-2.5 px-6 rounded-full text-sm">Agendar Conversa</Button>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t p-8 flex flex-col gap-6 shadow-2xl absolute top-full left-0 w-full"
          >
            {['Serviços', 'Metodologia', 'Franquias', 'Diferenciais'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xl font-bold" onClick={() => setIsMenuOpen(false)}>{item}</a>
            ))}
            <Button>Solicitar Diagnóstico</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-50 overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Escritório"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-bold text-[#1E40AF] mb-6 uppercase tracking-[0.2em]">
            <Crown size={18} /> Sua Parceira Estratégica em Talentos
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
            Recrutamento certo <br />
            para decisões <br />
            <span className="text-[#1E40AF]">de alto nível.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Consultoria especializada em hunting de profissionais com <span className="font-bold text-slate-900">reposição gratuita por 12 meses</span>. Segurança absoluta para o seu crescimento.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mb-6">
            <input
              type="email"
              placeholder="Seu e-mail corporativo"
              className="flex-1 px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-[#1E40AF] outline-none transition-all shadow-sm"
            />
            <Button className="text-lg">Começar Agora</Button>
          </div>
          <p className="text-xs text-slate-400 ml-2 italic">* Entraremos em contato em até 24h úteis.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <Card className="p-10 glass-card border-white/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-100 p-3 rounded-2xl text-[#1E40AF]">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Garantia Imbatível</h3>
                <p className="text-sm text-slate-500 uppercase font-black tracking-widest">12 Meses de Proteção</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-slate-700 font-medium">"Somos a única consultoria que oferece reposição de qualquer vaga por 1 ano sem custos adicionais."</p>
              </div>
              <div className="flex justify-between items-center px-2">
                <div className="text-center">
                  <div className="text-2xl font-black text-[#1E40AF]">98%</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Assertividade</div>
                </div>
                <div className="h-8 w-px bg-slate-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#1E40AF]">15d</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Prazo Médio</div>
                </div>
                <div className="h-8 w-px bg-slate-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#1E40AF]">+500</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Vagas Fechadas</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

const Methodology = () => {
  const steps = [
    { title: "Descrição da Vaga", icon: <FileText />, desc: "Alinhamento com gestor sobre requisitos e perfil ideal." },
    { title: "Atração de Talentos", icon: <Search />, desc: "Estratégias de hunting ativo para encontrar os melhores." },
    { title: "Triagem", icon: <Filter />, desc: "Análise profunda de currículos com tecnologia avançada." },
    { title: "Entrevista Inicial", icon: <Users />, desc: "Primeiro filtro comportamental e de fit básico." },
    { title: "Aplicação de Testes", icon: <ClipboardCheck />, desc: "Avaliações técnicas, psicométricas e situacionais." },
    { title: "Análise Comportamental", icon: <BrainCircuit />, desc: "Avaliação profunda de alinhamento com a cultura." },
    { title: "Parecer Profissional", icon: <BarChart3 />, desc: "Resumo detalhado de competências e potencial." },
    { title: "Envio do Book", icon: <Award />, desc: "Apresentação dos finalistas com dossiê completo." }
  ];

  return (
    <section id="metodologia" className="py-32 px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#1E40AF] font-bold text-sm uppercase tracking-widest mb-4 block">Foco em Resultados</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Nosso Processo Seletivo Completo</h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed">
            Metodologia estruturada em 8 etapas para garantir máxima assertividade e fit cultural em cada contratação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-50 hidden lg:block -translate-y-1/2 z-0"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative z-10"
            >
              <Card className="p-8 h-full hover:border-[#1E40AF] transition-all group border-slate-50 shadow-sm hover:shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 text-[#1E40AF] flex items-center justify-center font-black group-hover:bg-[#1E40AF] group-hover:text-white transition-all">
                    {i + 1}
                  </div>
                  <div className="text-slate-200 group-hover:text-[#1E40AF] transition-colors">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AssessmentDetails = () => {
  const evaluations = [
    { title: "Testes Comportamentais", items: ["Perfil comportamental", "Tomada de decisão", "Relacionamento interpessoal"], icon: <Users className="text-blue-500" /> },
    { title: "Avaliação de Fit Cultural", items: ["Postura profissional", "Alinhamento de valores", "Redução de turnover"], icon: <Target className="text-teal-500" /> },
    { title: "Método STAR", items: ["Entrevistas por competência", "Previsão de performance", "Foco em resultados"], icon: <Sparkles className="text-amber-500" /> },
    { title: "Testes de Competência", items: ["Validação técnica", "Conhecimentos específicos", "Prática da experiência"], icon: <Briefcase className="text-indigo-500" /> }
  ];

  return (
    <section className="py-32 px-8 bg-slate-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 text-left">
            <h2 className="text-4xl font-black mb-6 leading-tight tracking-tighter">O que nosso <br /><span className="text-[#1E40AF]">cliente recebe?</span></h2>
            <ul className="space-y-4 mb-8">
              {["Parecer profissional detalhado", "Pontos fortes e de desenvolvimento", "Recomendação estratégica", "Indicação clara de aderência"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-400">
                  <Check className="text-[#1E40AF]" size={20} /> {item}
                </li>
              ))}
            </ul>
            <Button variant="white" className="w-full">Ver Exemplo de Book</Button>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {evaluations.map((ev, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all">
                <div className="mb-4">{ev.icon}</div>
                <h4 className="text-xl font-bold mb-4">{ev.title}</h4>
                <ul className="space-y-2">
                  {ev.items.map((item, j) => (
                    <li key={j} className="text-sm text-slate-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1E40AF]"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="pt-0 px-8 bg-white mb-16">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#1E40AF] rounded-[48px] p-12 md:p-20 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">Vamos transformar <br />seu RH hoje?</h2>
          <p className="text-blue-100 text-xl mb-14 max-w-2xl mx-auto">
            Invista na sua equipe, invista no seu futuro. Agende uma reunião de 30 minutos sem compromisso.
          </p>

          <div className="bg-white rounded-[32px] p-4 flex flex-col md:flex-row gap-4 max-w-3xl mx-auto shadow-2xl">
            <input
              type="email"
              placeholder="Digite seu e-mail para agendarmos"
              className="flex-1 px-8 py-5 rounded-2xl text-slate-900 bg-slate-50 outline-none font-medium focus:ring-2 focus:ring-[#1E40AF]"
            />
            <Button className="md:w-auto w-full py-5 text-lg">Solicitar Proposta</Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-10 text-blue-100 font-bold">
            <a href="mailto:contato@recrutare.com.br" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={20} /> contato@recrutare.com.br
            </a>
            <a href="tel:5511936180919" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={20} /> (11) 93618-0919
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-4 px-8 bg-slate-50 border-t border-slate-100">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-4 items-start">
          <img src="/logo-recru.png" alt="Logo Recrutare" className="h-10 w-auto object-contain" />
          <p className="text-slate-400 text-sm max-w-xs font-medium">
            Sua parceira estratégica em recrutamento, seleção e hunting de alta performance.
          </p>
        </div>
        <a href="https://www.instagram.com/recrutareoficial/?igsh=ejRoZmE0OTN6Z3h0#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1E40AF] transition-colors flex items-center gap-2">
                <Instagram size={24} />
                <span className="font-medium">Instagram</span>
              </a>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
        <span>© {new Date().getFullYear()} RECRUTARE CONSULTORIA</span>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="selection:bg-[#1E40AF] selection:text-white antialiased">
      <Navbar />
      <Hero />
      <Methodology />
      <AssessmentDetails />

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-32 px-8 bg-slate-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 tracking-tighter">Nosso Diferencial <br />Único no Mercado</h2>
            <div className="space-y-6">
              {[
                { title: "Risco Zero no Investimento", desc: "Se o profissional não atender, nós o substituímos sem custo." },
                { title: "Parceria de Longo Prazo", desc: "Foco em construir relacionamentos duradouros e entrega contínua." },
                { title: "Prova de Compromisso", desc: "A demonstração prática de nossa dedicação ao fit perfeito." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 bg-[#1E40AF] p-1 rounded-full shrink-0"><Check className="text-white" size={16} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#1E40AF] rounded-[40px] rotate-3 opacity-5"></div>
            <Card className="p-16 text-center relative border-2 border-[#1E40AF]/10">
              <Award size={80} className="text-[#1E40AF] mx-auto mb-8" />
              <h3 className="text-3xl font-black text-[#1E40AF] mb-4">Garantia de 12 Meses</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Somos a <span className="font-bold">única consultoria de recrutamento</span> que oferece reposição gratuita por um ano completo. Isso redefine o padrão do mercado brasileiro.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />

      {/* Floating Conversor */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/5511936180919"
        target="_blank"
        className="fixed bottom-10 right-10 w-16 h-16 bg-[#1E40AF] text-white rounded-full flex items-center justify-center shadow-2xl z-50 shadow-blue-900/40"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
};

export default App;
