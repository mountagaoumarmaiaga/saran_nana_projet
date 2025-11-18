"use client"

import React, { useEffect, useState, useCallback } from 'react'
import { getProductCategoryDistribution } from '../actions'
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Rectangle,
  BarChart,
  LabelList,
  Cell
} from 'recharts'
import EmptyState from './EmptyState'
import { TrendingUp, Package } from 'lucide-react'

// Définition des types
interface ChartData {
  name: string;
  value: number;
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
  }>;
  label?: string;
}

interface BarProps {
  fill?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
}

const CategoryChart = ({ email }: { email: string }) => {
  const [data, setData] = useState<ChartData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Palette de couleurs pour le thème Forest
  const COLORS = [
    '#16a34a', // Vert principal forest
    '#22c55e', // Vert clair
    '#15803d', // Vert foncé
    '#65a30d', // Vert lime
    '#4d7c0f', // Vert olive
    '#059669', // Vert émeraude
    '#047857', // Vert émeraude foncé
    '#0f766e', // Vert bleuté
    '#115e59', // Vert bleuté foncé
    '#134e4a'  // Vert très foncé
  ]

  const fetchStats = useCallback(async () => {
    try {
      setIsLoading(true)
      if (email) {
        const categoryData = await getProductCategoryDistribution(email)
        if (categoryData) {
          setData(categoryData)
        }
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [email])

  useEffect(() => {
    if (email) {
      fetchStats()
    }
  }, [email, fetchStats])

  // Tooltip personnalisé
  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-base-100 p-4 rounded-lg shadow-lg border border-base-300">
          <p className="font-semibold text-base-content mb-1">{label}</p>
          <p className="text-primary font-bold">
            {payload[0].value} produit{payload[0].value > 1 ? 's' : ''}
          </p>
        </div>
      )
    }
    return null
  }

  // Barre personnalisée avec effet de hover
  const CustomBar = (props: BarProps) => {
    const { fill = '#16a34a', x = 0, y = 0, width = 0, height = 0, index = 0 } = props
    const [isHovered, setIsHovered] = useState(false)

    return (
      <g>
        <defs>
          <linearGradient id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fill} stopOpacity={0.9} />
            <stop offset="100%" stopColor={fill} stopOpacity={0.5} />
          </linearGradient>
        </defs>
        
        <Rectangle
          x={x}
          y={y}
          width={width}
          height={height}
          fill={isHovered ? `url(#gradient-${index})` : fill}
          stroke={isHovered ? '#15803d' : 'none'}
          strokeWidth={isHovered ? 2 : 0}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ transition: 'all 0.3s ease' }}
        />
      </g>
    )
  }

  const renderChart = () => (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={data}
        margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
        barCategoryGap="15%"
        barGap={3}
      >
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke="#374151"
          strokeOpacity={0.2}
          vertical={false}
        />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#9ca3af", fontWeight: 500 }}
          tickMargin={10}
          interval={0}
          angle={-45}
          textAnchor="end"
          height={80}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 11, fill: "#9ca3af" }}
          tickMargin={10}
          width={40}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          verticalAlign="top" 
          height={36}
          iconType="circle"
          iconSize={10}
          formatter={(value) => (
            <span className="text-sm text-base-content font-medium">{value}</span>
          )}
        />
        <Bar
          dataKey="value"
          name="Nombre de produits"
          activeBar={<Rectangle fill="#16a34a" stroke="#15803d" strokeWidth={2} />}
          radius={[6, 6, 0, 0]}
          barSize={45}
          shape={<CustomBar />}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={COLORS[index % COLORS.length]}
            />
          ))}
          <LabelList
            dataKey="value"
            position="top"
            style={{ 
              fontSize: 12, 
              fontWeight: 'bold', 
              fill: '#ffffff',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )

  if (isLoading) {
    return (
      <div className='w-full bg-base-100 border border-base-300 mt-6 p-6 rounded-2xl shadow-sm'>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Package className="w-5 h-5 text-primary" />
          </div>
          <h2 className='text-xl font-bold text-base-content'>
            5 catégories avec le plus de produits
          </h2>
        </div>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
            <p className="text-base-content/70">Chargement des données...</p>
          </div>
        </div>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className='w-full bg-base-100 border border-base-300 mt-6 p-6 rounded-2xl shadow-sm'>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Package className="w-5 h-5 text-primary" />
          </div>
          <h2 className='text-xl font-bold text-base-content'>
            5 catégories avec le plus de produits
          </h2>
        </div>
        <EmptyState
          message='Aucune donnée de catégorie disponible'
          IconComponent='Users' // Utiliser 'Users' au lieu de 'Group'
        />
      </div>
    )
  }

  return (
    <div className='w-full bg-base-100 border border-base-300 mt-6 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300'>
      {/* En-tête amélioré */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/20 rounded-xl border border-primary/30">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className='text-xl font-bold text-base-content'>
              Top des catégories
            </h2>
            <p className="text-sm text-base-content/70 mt-1">
              Répartition par nombre de produits
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">
            {data.reduce((sum, item) => sum + item.value, 0)}
          </div>
          <div className="text-xs text-base-content/70">Produits total</div>
        </div>
      </div>

      {/* Graphique */}
      {renderChart()}

      {/* Légende améliorée */}
      <div className="mt-4 pt-4 border-t border-base-300">
        <div className="flex flex-wrap gap-4 justify-center">
          {data.slice(0, 5).map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-sm text-base-content font-medium">
                {item.name}
              </span>
              <span className="text-sm font-bold text-primary">
                ({item.value})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryChart