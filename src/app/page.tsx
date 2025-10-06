"use client"

import { useState } from 'react'
import { Search, Filter, Star, Eye, Heart, TrendingUp, Zap, Target, Rocket, Crown, Lightbulb } from 'lucide-react'

export default function ViralMasteryTemplates() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [favorites, setFavorites] = useState<number[]>([])

  const categories = [
    { id: 'all', name: 'Todos os Templates', count: 60 },
    { id: 'social', name: 'Redes Sociais', count: 15 },
    { id: 'video', name: 'Vídeos Virais', count: 12 },
    { id: 'stories', name: 'Stories', count: 10 },
    { id: 'reels', name: 'Reels/TikTok', count: 8 },
    { id: 'posts', name: 'Posts Engajamento', count: 9 },
    { id: 'ads', name: 'Anúncios Pagos', count: 6 }
  ]

  const templates = [
    // Social Media Templates
    { id: 1, title: "Hook Irresistível para Stories", category: "stories", views: "2.3M", rating: 4.9, description: "Ganchos que prendem a atenção nos primeiros 3 segundos", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop" },
    { id: 2, title: "Carrossel Viral de Dicas", category: "social", views: "1.8M", rating: 4.8, description: "Template de carrossel que gera milhares de saves", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop" },
    { id: 3, title: "Reels de Transformação", category: "reels", views: "5.2M", rating: 4.9, description: "Antes e depois que viralizam instantaneamente", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop" },
    { id: 4, title: "Post de Pergunta Engajadora", category: "posts", views: "890K", rating: 4.7, description: "Perguntas que geram centenas de comentários", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=200&fit=crop" },
    { id: 5, title: "Stories de Bastidores", category: "stories", views: "1.2M", rating: 4.6, description: "Mostre o processo e humanize sua marca", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop" },
    
    // Video Templates
    { id: 6, title: "Vídeo Tutorial Rápido", category: "video", views: "3.1M", rating: 4.8, description: "Ensine algo em 60 segundos e viralizar", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop" },
    { id: 7, title: "Storytelling Emocional", category: "video", views: "2.7M", rating: 4.9, description: "Histórias que tocam o coração e viralizam", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
    { id: 8, title: "Trend Challenge Adaptado", category: "reels", views: "4.5M", rating: 4.8, description: "Como adaptar trends para seu nicho", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop" },
    { id: 9, title: "Vídeo de Lista Top 5", category: "video", views: "1.9M", rating: 4.7, description: "Listas que prendem até o final", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=300&h=200&fit=crop" },
    { id: 10, title: "Reação Autêntica", category: "reels", views: "2.1M", rating: 4.6, description: "Reações genuínas que conectam", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop" },
    
    // Stories Templates
    { id: 11, title: "Quiz Interativo", category: "stories", views: "1.5M", rating: 4.8, description: "Quizzes que aumentam o engajamento", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=200&fit=crop" },
    { id: 12, title: "Enquete Polêmica", category: "stories", views: "2.2M", rating: 4.7, description: "Enquetes que geram discussão", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop" },
    { id: 13, title: "Tutorial Passo a Passo", category: "stories", views: "1.1M", rating: 4.6, description: "Ensine de forma visual e clara", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop" },
    { id: 14, title: "Dica Rápida do Dia", category: "stories", views: "980K", rating: 4.5, description: "Valor diário em 15 segundos", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop" },
    { id: 15, title: "Motivação Matinal", category: "stories", views: "1.3M", rating: 4.7, description: "Inspire sua audiência todo dia", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" },
    
    // Reels/TikTok Templates
    { id: 16, title: "Transição Criativa", category: "reels", views: "6.1M", rating: 4.9, description: "Transições que impressionam", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop" },
    { id: 17, title: "Dueto Estratégico", category: "reels", views: "3.8M", rating: 4.8, description: "Como fazer duetos que viralizam", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop" },
    { id: 18, title: "Trend de Dança Adaptado", category: "reels", views: "4.2M", rating: 4.7, description: "Adapte danças para seu conteúdo", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop" },
    { id: 19, title: "Revelação Surpreendente", category: "reels", views: "2.9M", rating: 4.8, description: "Plot twists que prendem atenção", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop" },
    { id: 20, title: "Comparação Visual", category: "reels", views: "1.7M", rating: 4.6, description: "Antes vs depois impactante", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=200&fit=crop" },
    
    // Posts Engajamento
    { id: 21, title: "Post de Opinião Controversa", category: "posts", views: "2.5M", rating: 4.8, description: "Gere debate saudável nos comentários", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop" },
    { id: 22, title: "Carrossel Educativo", category: "posts", views: "1.9M", rating: 4.7, description: "Eduque e engaje simultaneamente", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop" },
    { id: 23, title: "Meme Relevante", category: "posts", views: "3.2M", rating: 4.6, description: "Humor que conecta com sua audiência", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop" },
    { id: 24, title: "Citação Inspiradora", category: "posts", views: "1.4M", rating: 4.5, description: "Frases que motivam e são compartilhadas", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" },
    { id: 25, title: "Pergunta de Engajamento", category: "posts", views: "1.1M", rating: 4.7, description: "Perguntas que geram centenas de respostas", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop" },
    
    // Ads Templates
    { id: 26, title: "Anúncio de Vídeo Persuasivo", category: "ads", views: "890K", rating: 4.9, description: "Converta visualizações em vendas", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop" },
    { id: 27, title: "Carrossel de Benefícios", category: "ads", views: "1.2M", rating: 4.8, description: "Mostre valor de forma visual", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop" },
    { id: 28, title: "Anúncio de Depoimento", category: "ads", views: "750K", rating: 4.7, description: "Prova social que converte", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
    { id: 29, title: "Oferta Limitada", category: "ads", views: "1.5M", rating: 4.8, description: "Urgência que gera ação imediata", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop" },
    { id: 30, title: "Demonstração de Produto", category: "ads", views: "980K", rating: 4.6, description: "Mostre seu produto em ação", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=300&h=200&fit=crop" },
    
    // Mais Templates Variados
    { id: 31, title: "Live de Perguntas e Respostas", category: "video", views: "1.8M", rating: 4.7, description: "Conecte-se diretamente com sua audiência", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop" },
    { id: 32, title: "Colaboração com Influencer", category: "social", views: "2.3M", rating: 4.8, description: "Parcerias que expandem alcance", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop" },
    { id: 33, title: "Conteúdo de Temporada", category: "posts", views: "1.6M", rating: 4.6, description: "Aproveite datas comemorativas", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=200&fit=crop" },
    { id: 34, title: "Tutorial de Ferramenta", category: "video", views: "1.4M", rating: 4.7, description: "Ensine a usar ferramentas úteis", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop" },
    { id: 35, title: "Storytelling de Cliente", category: "video", views: "2.1M", rating: 4.8, description: "Histórias reais que inspiram", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
    
    { id: 36, title: "Post de Gratidão", category: "posts", views: "890K", rating: 4.5, description: "Agradeça e humanize sua marca", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" },
    { id: 37, title: "Desafio de 30 Dias", category: "social", views: "3.5M", rating: 4.9, description: "Engaje por um mês inteiro", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop" },
    { id: 38, title: "Erro Comum vs Solução", category: "video", views: "2.2M", rating: 4.8, description: "Eduque corrigindo equívocos", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop" },
    { id: 39, title: "Dia na Vida", category: "stories", views: "1.7M", rating: 4.6, description: "Mostre sua rotina autêntica", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop" },
    { id: 40, title: "Reels de Motivação", category: "reels", views: "2.8M", rating: 4.7, description: "Inspire em 30 segundos", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" },
    
    { id: 41, title: "Post de Reflexão", category: "posts", views: "1.3M", rating: 4.6, description: "Provoque pensamentos profundos", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop" },
    { id: 42, title: "Vídeo de Unboxing", category: "video", views: "1.9M", rating: 4.5, description: "Desperte curiosidade e desejo", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=300&h=200&fit=crop" },
    { id: 43, title: "Stories de Dicas Rápidas", category: "stories", views: "1.1M", rating: 4.7, description: "Valor em pílulas diárias", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop" },
    { id: 44, title: "Reels de Transformação", category: "reels", views: "4.1M", rating: 4.9, description: "Antes e depois impactantes", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=200&fit=crop" },
    { id: 45, title: "Post de Lista", category: "posts", views: "1.5M", rating: 4.6, description: "Organize informações valiosas", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop" },
    
    { id: 46, title: "Vídeo de Bastidores", category: "video", views: "1.2M", rating: 4.5, description: "Mostre o processo criativo", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop" },
    { id: 47, title: "Anúncio de Problema/Solução", category: "ads", views: "1.8M", rating: 4.8, description: "Identifique dor e ofereça cura", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop" },
    { id: 48, title: "Stories de Enquete", category: "stories", views: "980K", rating: 4.4, description: "Envolva com escolhas simples", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=200&fit=crop" },
    { id: 49, title: "Reels de Trend Musical", category: "reels", views: "3.7M", rating: 4.7, description: "Use músicas virais estrategicamente", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop" },
    { id: 50, title: "Post de Citação Visual", category: "posts", views: "1.4M", rating: 4.6, description: "Frases impactantes com design", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" },
    
    // Templates Extras para passar de 50
    { id: 51, title: "Vídeo de Comparação", category: "video", views: "2.0M", rating: 4.7, description: "Compare opções de forma clara", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop" },
    { id: 52, title: "Stories de Countdown", category: "stories", views: "1.3M", rating: 4.5, description: "Crie expectativa para lançamentos", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop" },
    { id: 53, title: "Reels de Dica Rápida", category: "reels", views: "2.5M", rating: 4.8, description: "Valor em 15 segundos", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop" },
    { id: 54, title: "Post de Pergunta Aberta", category: "posts", views: "1.1M", rating: 4.4, description: "Gere discussões profundas", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop" },
    { id: 55, title: "Anúncio de Urgência", category: "ads", views: "1.6M", rating: 4.9, description: "Escassez que converte", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop" },
    
    { id: 56, title: "Vídeo de Top 10", category: "video", views: "2.8M", rating: 4.8, description: "Rankings que prendem atenção", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=300&h=200&fit=crop" },
    { id: 57, title: "Stories de Dúvida", category: "stories", views: "890K", rating: 4.3, description: "Pergunte e engaje", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=200&fit=crop" },
    { id: 58, title: "Reels de Lifestyle", category: "reels", views: "1.9M", rating: 4.6, description: "Mostre seu estilo de vida", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop" },
    { id: 59, title: "Post de Agradecimento", category: "posts", views: "1.2M", rating: 4.5, description: "Reconheça sua comunidade", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
    { id: 60, title: "Template de Lançamento", category: "social", views: "3.1M", rating: 4.9, description: "Anuncie novidades com impacto", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop" }
  ]

  const toggleFavorite = (templateId: number) => {
    setFavorites(prev => 
      prev.includes(templateId) 
        ? prev.filter(id => id !== templateId)
        : [...prev, templateId]
    )
  }

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Viral Mastery Templates
              </h1>
              <p className="text-gray-300 text-lg mt-2">
                Mais de 60 ideias comprovadas para viralizar seu conteúdo
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">60+</div>
                <div className="text-purple-300 text-sm">Ideias</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-purple-600/20 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white">150M+</div>
              <div className="text-purple-300">Visualizações</div>
            </div>
            <div className="text-center">
              <div className="bg-pink-600/20 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Zap className="w-8 h-8 text-pink-400" />
              </div>
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-purple-300">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white">5000+</div>
              <div className="text-purple-300">Alunos</div>
            </div>
            <div className="text-center">
              <div className="bg-pink-600/20 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-pink-400" />
              </div>
              <div className="text-2xl font-bold text-white">24h</div>
              <div className="text-purple-300">Para Viralizar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar ideias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                />
              </div>
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-purple-900/30 text-purple-300 hover:bg-purple-800/40 border border-purple-500/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-gradient-to-br from-purple-900/40 to-black/60 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Template Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-600/80 text-green-100 border border-green-500/50 backdrop-blur-sm">
                      <div className="flex items-center gap-1">
                        <Lightbulb className="w-3 h-3" />
                        Gratuito
                      </div>
                    </span>
                  </div>
                  <button
                    onClick={() => toggleFavorite(template.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
                  >
                    <Heart 
                      className={`w-4 h-4 ${
                        favorites.includes(template.id) 
                          ? 'text-pink-500 fill-current' 
                          : 'text-white'
                      }`} 
                    />
                  </button>
                </div>

                {/* Template Content */}
                <div className="p-5">
                  {/* Template Header */}
                  <div className="mb-3">
                    <h3 className="text-white font-semibold text-lg leading-tight mb-2">
                      {template.title}
                    </h3>
                    <p className="text-purple-200 text-sm leading-relaxed">
                      {template.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-sm">{template.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-purple-300 text-sm">{template.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-purple-900/20 p-8 rounded-2xl border border-purple-500/20 max-w-md mx-auto">
                <Filter className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">
                  Nenhuma ideia encontrada
                </h3>
                <p className="text-purple-300">
                  Tente ajustar sua busca ou filtros
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/40 to-pink-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 lg:p-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full">
                <Crown className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Pronto para Viralizar?
            </h2>
            <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
              Explore todas as 60+ ideias do Viral Mastery e transforme seu conteúdo em fenômenos virais. 
              Resultados comprovados por milhares de criadores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/30 hover:transform hover:scale-105">
                Comprar Curso Completo
              </button>
              <button className="border-2 border-purple-500 text-purple-300 hover:bg-purple-600/20 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200">
                Ver Demonstração
              </button>
            </div>
            <div className="mt-6 text-purple-300 text-sm">
              ⭐ Garantia de 30 dias • 🚀 Resultados em 24h • 💎 Suporte VIP
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 border-t border-purple-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-purple-300 mb-4">
            © 2024 Viral Mastery. Todos os direitos reservados.
          </div>
          <div className="text-purple-400 text-sm">
            Transformando criadores em fenômenos virais desde 2024
          </div>
        </div>
      </footer>
    </div>
  )
}