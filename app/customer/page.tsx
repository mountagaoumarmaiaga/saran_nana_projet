"use client"

import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState, useCallback } from 'react'
import { createClient, readClients, updateClient, deleteClient, getClientStats } from '../actions'
import { toast } from 'react-toastify'
import { Plus, Search, Edit, Trash2, User, Mail, Phone, MapPin, Users, FileText } from 'lucide-react'
import Wrapper from '../components/Wrapper'
import { Client, ClientStats } from '@/type'

interface ClientFormData {
    name: string
    email: string
    phone: string
    address: string
}

const ClientsPage = () => {
    const { user } = useUser()
    const email = user?.primaryEmailAddress?.emailAddress as string
    const [clients, setClients] = useState<Client[]>([])
    const [loading, setLoading] = useState(false)
    const [stats, setStats] = useState<ClientStats>({
        totalClients: 0,
        clientsWithEmail: 0,
        clientsWithPhone: 0,
        clientsWithInvoices: 0
    })
    const [searchTerm, setSearchTerm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [editingClient, setEditingClient] = useState<Client | null>(null)
    const [formData, setFormData] = useState<ClientFormData>({
        name: '',
        email: '',
        phone: '',
        address: ''
    })
    const [formLoading, setFormLoading] = useState(false)

    const fetchClients = useCallback(async () => {
        if (!email) return
        
        try {
            setLoading(true)
            const clientsData = await readClients(email)
            setClients(clientsData || [])
            
            // Charger les statistiques
            const clientStats = await getClientStats(email)
            setStats(clientStats)
        } catch (error) {
            console.error('Erreur chargement clients:', error)
            toast.error('Erreur lors du chargement des clients')
        } finally {
            setLoading(false)
        }
    }, [email])

    useEffect(() => {
        fetchClients()
    }, [email, fetchClients])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setFormLoading(true)
        try {
            if (editingClient) {
                // Mise à jour du client
                await updateClient(editingClient.id, formData, email)
                toast.success('Client mis à jour avec succès')
            } else {
                // Création d'un nouveau client
                await createClient(formData, email)
                toast.success('Client créé avec succès')
            }
            
            setShowModal(false)
            resetForm()
            fetchClients()
        } catch (error: unknown) {
            console.error('Erreur:', error)
            const errorMessage = error instanceof Error ? error.message : 'Erreur lors de la sauvegarde du client'
            toast.error(errorMessage)
        } finally {
            setFormLoading(false)
        }
    }

    const handleEdit = (client: Client) => {
        setEditingClient(client)
        setFormData({
            name: client.name,
            email: client.email || '',
            phone: client.phone || '',
            address: client.address
        })
        setShowModal(true)
    }

    const handleDelete = async (clientId: string) => {
        if (!email || !confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) return

        try {
            await deleteClient(clientId, email)
            toast.success('Client supprimé avec succès')
            fetchClients()
        } catch (error: unknown) {
            console.error('Erreur suppression:', error)
            const errorMessage = error instanceof Error ? error.message : 'Erreur lors de la suppression du client'
            toast.error(errorMessage)
        }
    }

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            address: ''
        })
        setEditingClient(null)
    }

    const filteredClients = clients.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.phone?.includes(searchTerm)
    )

    // Fonction pour formater la date
    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    // Fonction pour obtenir les initiales
    const getInitials = (name: string) => {
        return name.charAt(0).toUpperCase()
    }

    return (
        <Wrapper>
            <div className="space-y-6 p-6">
                {/* En-tête */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                            <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 text-primary">
                                <Users className="w-full h-full" />
                            </div>
                            Gestion des Clients
                        </h1>
                        <p className="text-base-content/60 mt-2 text-sm sm:text-base">
                            Gérez vos clients et leurs informations
                        </p>
                    </div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="btn btn-primary gap-2 w-full sm:w-auto"
                    >
                        <div className="flex items-center justify-center w-4 h-4">
                            <Plus className="w-full h-full" />
                        </div>
                        Nouveau Client
                    </button>
                </div>

                {/* Statistiques */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <div className="stat bg-base-100 rounded-lg shadow-sm border border-base-300">
                        <div className="stat-figure text-primary">
                            <div className="flex items-center justify-center w-6 h-6">
                                <Users className="w-full h-full" />
                            </div>
                        </div>
                        <div className="stat-title text-xs">Total Clients</div>
                        <div className="stat-value text-lg">{stats.totalClients}</div>
                    </div>
                    
                    <div className="stat bg-base-100 rounded-lg shadow-sm border border-base-300">
                        <div className="stat-figure text-success">
                            <div className="flex items-center justify-center w-6 h-6">
                                <Mail className="w-full h-full" />
                            </div>
                        </div>
                        <div className="stat-title text-xs">Avec Email</div>
                        <div className="stat-value text-lg">{stats.clientsWithEmail}</div>
                        <div className="stat-desc text-xs">
                            {stats.totalClients > 0 ? Math.round((stats.clientsWithEmail / stats.totalClients) * 100) : 0}%
                        </div>
                    </div>
                    
                    <div className="stat bg-base-100 rounded-lg shadow-sm border border-base-300">
                        <div className="stat-figure text-info">
                            <div className="flex items-center justify-center w-6 h-6">
                                <Phone className="w-full h-full" />
                            </div>
                        </div>
                        <div className="stat-title text-xs">Avec Téléphone</div>
                        <div className="stat-value text-lg">{stats.clientsWithPhone}</div>
                        <div className="stat-desc text-xs">
                            {stats.totalClients > 0 ? Math.round((stats.clientsWithPhone / stats.totalClients) * 100) : 0}%
                        </div>
                    </div>
                    
                    <div className="stat bg-base-100 rounded-lg shadow-sm border border-base-300">
                        <div className="stat-figure text-warning">
                            <div className="flex items-center justify-center w-6 h-6">
                                <FileText className="w-full h-full" />
                            </div>
                        </div>
                        <div className="stat-title text-xs">Avec Factures</div>
                        <div className="stat-value text-lg">{stats.clientsWithInvoices}</div>
                        <div className="stat-desc text-xs">
                            {stats.totalClients > 0 ? Math.round((stats.clientsWithInvoices / stats.totalClients) * 100) : 0}%
                        </div>
                    </div>
                </div>

                {/* Barre de recherche et actions */}
                <div className="card bg-base-100 shadow-sm border border-base-300">
                    <div className="card-body p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
                            <div className="form-control flex-1 w-full">
                                <label className="label pb-2">
                                    <span className="label-text font-medium">Rechercher un client</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute left-3 top-3 flex items-center justify-center w-4 h-4 text-base-content/40">
                                        <Search className="w-full h-full" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Nom, email ou téléphone..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="input input-bordered w-full pl-10 input-sm sm:input-md"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex gap-2 w-full sm:w-auto">
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="btn btn-outline btn-sm w-full sm:w-auto"
                                    disabled={!searchTerm}
                                >
                                    Effacer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Liste des clients */}
                <div className="card bg-base-100 shadow-sm border border-base-300">
                    <div className="card-body p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                            <h3 className="text-lg font-semibold">
                                Liste des Clients <span className="text-primary">({filteredClients.length})</span>
                            </h3>
                            <div className="text-sm text-base-content/60 bg-base-200 px-3 py-1 rounded-full">
                                {clients.length} client{clients.length !== 1 ? 's' : ''} au total
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex justify-center py-12">
                                <div className="flex flex-col items-center gap-3">
                                    <span className="loading loading-spinner loading-lg text-primary"></span>
                                    <p className="text-base-content/60 text-sm">Chargement des clients...</p>
                                </div>
                            </div>
                        ) : filteredClients.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                                {filteredClients.map((client) => (
                                    <div key={client.id} className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300 group">
                                        <div className="card-body p-4 sm:p-6">
                                            {/* En-tête de la carte */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar placeholder">
                                                        <div className="bg-primary text-primary-content rounded-full w-10 h-10 sm:w-12 sm:h-12 group-hover:bg-primary-focus transition-colors">
                                                            <span className="text-sm sm:text-lg font-bold">
                                                                {getInitials(client.name)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="card-title text-base sm:text-lg truncate font-semibold">
                                                            {client.name}
                                                        </h3>
                                                        <p className="text-xs sm:text-sm text-base-content/60">
                                                            Créé le {formatDate(client.createdAt)}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="dropdown dropdown-end">
                                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5">
                                                            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44 border border-base-300">
                                                        <li>
                                                            <button 
                                                                onClick={() => handleEdit(client)}
                                                                className="flex items-center gap-2 text-sm"
                                                            >
                                                                <div className="flex items-center justify-center w-4 h-4">
                                                                    <Edit className="w-full h-full" />
                                                                </div>
                                                                Modifier
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button 
                                                                onClick={() => handleDelete(client.id)}
                                                                className="flex items-center gap-2 text-sm text-error hover:text-error"
                                                            >
                                                                <div className="flex items-center justify-center w-4 h-4">
                                                                    <Trash2 className="w-full h-full" />
                                                                </div>
                                                                Supprimer
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Informations du client */}
                                            <div className="space-y-2">
                                                {client.email && (
                                                    <div className="flex items-center gap-2 p-2 bg-base-100 rounded-lg border border-base-300">
                                                        <div className="flex items-center justify-center w-4 h-4 text-primary flex-shrink-0">
                                                            <Mail className="w-full h-full" />
                                                        </div>
                                                        <a 
                                                            href={`mailto:${client.email}`}
                                                            className="text-xs sm:text-sm hover:text-primary transition-colors truncate"
                                                        >
                                                            {client.email}
                                                        </a>
                                                    </div>
                                                )}
                                                
                                                {client.phone && (
                                                    <div className="flex items-center gap-2 p-2 bg-base-100 rounded-lg border border-base-300">
                                                        <div className="flex items-center justify-center w-4 h-4 text-info flex-shrink-0">
                                                            <Phone className="w-full h-full" />
                                                        </div>
                                                        <a 
                                                            href={`tel:${client.phone}`}
                                                            className="text-xs sm:text-sm hover:text-info transition-colors"
                                                        >
                                                            {client.phone}
                                                        </a>
                                                    </div>
                                                )}
                                                
                                                {client.address && (
                                                    <div className="flex items-start gap-2 p-2 bg-base-100 rounded-lg border border-base-300">
                                                        <div className="flex items-center justify-center w-4 h-4 text-warning flex-shrink-0 mt-0.5">
                                                            <MapPin className="w-full h-full" />
                                                        </div>
                                                        <span className="text-xs sm:text-sm flex-1 leading-relaxed">{client.address}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Footer de la carte */}
                                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-base-300">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center justify-center w-4 h-4 text-base-content/60">
                                                        <FileText className="w-full h-full" />
                                                    </div>
                                                    <span className="text-xs text-base-content/60">
                                                        {client._count?.invoices || 0} facture{client._count?.invoices !== 1 ? 's' : ''}
                                                    </span>
                                                </div>
                                                <div className="text-xs text-base-content/40 font-mono">
                                                    #{client.id.slice(-6)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-base-content/40">
                                    <Users className="w-full h-full" />
                                </div>
                                <h3 className="text-lg font-medium mb-2">
                                    {searchTerm ? 'Aucun client trouvé' : 'Aucun client'}
                                </h3>
                                <p className="text-base-content/60 mb-6 max-w-md mx-auto text-sm">
                                    {searchTerm 
                                        ? 'Aucun client ne correspond à votre recherche. Essayez avec d&apos;autres termes.'
                                        : 'Commencez par ajouter votre premier client pour gérer vos relations clients.'
                                    }
                                </p>
                                {!searchTerm && (
                                    <button
                                        onClick={() => setShowModal(true)}
                                        className="btn btn-primary gap-2"
                                    >
                                        <div className="flex items-center justify-center w-4 h-4">
                                            <Plus className="w-full h-full" />
                                        </div>
                                        Ajouter votre premier client
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Modal d'ajout/modification */}
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div 
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => {
                                setShowModal(false)
                                resetForm()
                            }}
                        />
                        
                        <div className="relative bg-base-100 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden border border-base-300">
                            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-base-300 bg-base-200">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 text-primary">
                                        <User className="w-full h-full" />
                                    </div>
                                    <h2 className="text-lg sm:text-xl font-bold">
                                        {editingClient ? 'Modifier le client' : 'Nouveau client'}
                                    </h2>
                                </div>
                                <button
                                    onClick={() => {
                                        setShowModal(false)
                                        resetForm()
                                    }}
                                    className="btn btn-ghost btn-sm btn-circle hover:bg-base-300"
                                    disabled={formLoading}
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Nom du client *</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Nom complet"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="input input-bordered w-full input-sm sm:input-md"
                                            required
                                            disabled={formLoading}
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                            <span className="label-text-alt text-base-content/60">Optionnel</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="email@exemple.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="input input-bordered w-full input-sm sm:input-md"
                                            disabled={formLoading}
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Téléphone</span>
                                            <span className="label-text-alt text-base-content/60">Optionnel</span>
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="+33 1 23 45 67 89"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            className="input input-bordered w-full input-sm sm:input-md"
                                            disabled={formLoading}
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Adresse *</span>
                                        </label>
                                        <textarea
                                            placeholder="Adresse complète"
                                            value={formData.address}
                                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                                            className="textarea textarea-bordered w-full h-24 textarea-sm sm:textarea-md"
                                            required
                                            disabled={formLoading}
                                        />
                                        <label className="label">
                                            <span className="label-text-alt text-base-content/60 text-xs">
                                                L&apos;adresse est requise pour les factures
                                            </span>
                                        </label>
                                    </div>

                                    <div className="flex gap-2 pt-4">
                                        <button
                                            type="button"
                                            className="btn btn-outline flex-1 btn-sm sm:btn-md"
                                            onClick={() => {
                                                setShowModal(false)
                                                resetForm()
                                            }}
                                            disabled={formLoading}
                                        >
                                            Annuler
                                        </button>
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary flex-1 gap-2 btn-sm sm:btn-md"
                                            disabled={formLoading}
                                        >
                                            {formLoading ? (
                                                <>
                                                    <span className="loading loading-spinner loading-sm"></span>
                                                    {editingClient ? 'Modification...' : 'Création...'}
                                                </>
                                            ) : (
                                                <>
                                                    <div className="flex items-center justify-center w-4 h-4">
                                                        <Plus className="w-full h-full" />
                                                    </div>
                                                    {editingClient ? 'Modifier' : 'Créer'}
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

export default ClientsPage