import { UserButton, useUser } from '@clerk/nextjs'
import { 
    ListTree, 
    Menu, 
    PackagePlus, 
    ShoppingBasket, 
    Warehouse, 
    X, 
    Receipt, 
    LayoutDashboard, 
    ArrowBigRightDash, 
    BarChart3,
    Users,
    FileText
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { checkAndAddEntreprise } from '../actions'
import Stock from './Stock'

const Navbar = () => {
    const { user, isLoaded } = useUser()
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isClient, setIsClient] = useState(false)
    const [stockModalOpen, setStockModalOpen] = useState(false)

    const navLinks = [
        { 
            href: "/", 
            label: "Tableau de Bord", 
            icon: LayoutDashboard,
            description: "Vue d'ensemble de votre stock"
        },
        { 
            href: "/products", 
            label: "Produits", 
            icon: ShoppingBasket,
            description: "Gérer vos produits"
        },
        { 
            href: "/new-product", 
            label: "Nouveau Produit", 
            icon: PackagePlus,
            description: "Ajouter un nouveau produit"
        },
        { 
            href: "/category", 
            label: "Catégories", 
            icon: ListTree,
            description: "Organiser par catégories"
        },
        { 
            href: "/customer", 
            label: "Clients", 
            icon: Users,
            description: "Gérer vos clients"
        },
        { 
            href: "/invoice", 
            label: "Factures", 
            icon: FileText,
            description: "Consulter les factures"
        },
        { 
            href: "/exit", 
            label: "Sortie Stock", 
            icon: ArrowBigRightDash,
            description: "Sortie de stock"
        },
        { 
            href: "/transactions", 
            label: "Transactions", 
            icon: Receipt,
            description: "Historique des transactions"
        },
        { 
            href: "/analytics", 
            label: "Analytics", 
            icon: BarChart3,
            description: "Statistiques et analyses"
        }
    ]

    // Initialisation côté client
    useEffect(() => {
        setIsClient(true)
    }, [])

    // Gestion du scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Initialisation de l'entreprise
    useEffect(() => {
        if (isLoaded && user?.primaryEmailAddress?.emailAddress && user.fullName) {
            checkAndAddEntreprise(user.primaryEmailAddress.emailAddress, user.fullName)
        }
    }, [user, isLoaded])

    // Fermer le menu lors du changement de route
    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    // Empêcher le scroll du body quand le menu mobile est ouvert
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [menuOpen])

    const openStockModal = () => {
        setStockModalOpen(true)
    }

    const closeStockModal = () => {
        setStockModalOpen(false)
    }

    const renderDesktopLinks = () => (
        <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 4).map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href
                return (
                    <Link
                        href={href}
                        key={href}
                        className={`btn btn-ghost flex gap-2 items-center px-3 py-2 rounded-lg transition-all duration-200 ${
                            isActive 
                                ? 'btn-primary text-primary-content shadow-md' 
                                : 'hover:bg-base-300 hover:shadow-sm'
                        }`}
                    >
                        <Icon className='w-4 h-4 flex-shrink-0' />
                        <span className="whitespace-nowrap text-sm font-medium">
                            {label}
                        </span>
                    </Link>
                )
            })}

            {/* Dropdown pour les liens supplémentaires */}
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn btn-ghost flex gap-2 items-center px-3 py-2 rounded-lg">
                    <Menu className="w-4 h-4" />
                    <span className="text-sm font-medium">Plus</span>
                </div>
                <div tabIndex={0} className="dropdown-content z-50 menu p-2 shadow-2xl bg-base-100 rounded-box w-64 border border-base-300">
                    {navLinks.slice(4).map(({ href, label, icon: Icon, description }) => (
                        <Link
                            href={href}
                            key={href}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-300 transition-colors group"
                        >
                            <div className="p-2 bg-base-200 rounded-lg group-hover:bg-base-300 transition-colors">
                                <Icon className="w-4 h-4 text-base-content/70" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm text-base-content group-hover:text-base-content/90">
                                    {label}
                                </p>
                                <p className="text-xs text-base-content/60 truncate">
                                    {description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Bouton Alimenter le Stock */}
            <button 
                className="btn btn-primary gap-2 px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200 shadow-md"
                onClick={openStockModal}
            >
                <Warehouse className='w-4 h-4' />
                <span className="text-sm font-medium">Alimenter Stock</span>
            </button>

            {/* Séparateur */}
            <div className="border-l border-base-300 h-8 mx-2"></div>

            {/* Profil Utilisateur */}
            <div className="flex items-center gap-2 bg-base-200 rounded-full px-3 py-1.5 hover:bg-base-300 transition-colors">
                <UserButton />
                <div className="flex flex-col min-w-0 max-w-32">
                    <span className="text-sm font-medium text-base-content truncate">
                        {user?.firstName || 'Utilisateur'}
                    </span>
                    <span className="text-xs text-base-content/60 truncate">
                        {user?.primaryEmailAddress?.emailAddress?.split('@')[0]}
                    </span>
                </div>
            </div>
        </div>
    )

    const renderMobileLinks = () => (
        <div className="flex-1 space-y-1 overflow-y-auto">
            {navLinks.map(({ href, label, icon: Icon, description }) => {
                const isActive = pathname === href
                return (
                    <Link
                        href={href}
                        key={href}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                            isActive 
                                ? 'bg-primary text-primary-content shadow-md' 
                                : 'hover:bg-base-300'
                        }`}
                        onClick={() => setMenuOpen(false)}
                    >
                        <div className={`p-2 rounded-lg ${
                            isActive ? 'bg-primary-content/20' : 'bg-base-200'
                        }`}>
                            <Icon className={`w-5 h-5 ${
                                isActive ? 'text-primary-content' : 'text-base-content/70'
                            }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className={`font-medium ${
                                isActive ? 'text-primary-content' : 'text-base-content'
                            }`}>
                                {label}
                            </p>
                            <p className={`text-sm ${
                                isActive ? 'text-primary-content/80' : 'text-base-content/60'
                            }`}>
                                {description}
                            </p>
                        </div>
                        {isActive && (
                            <div className="w-2 h-2 bg-primary-content rounded-full"></div>
                        )}
                    </Link>
                )
            })}

            {/* Bouton Alimenter le Stock Mobile */}
            <button 
                className="w-full flex items-center gap-4 p-4 bg-primary text-primary-content rounded-xl shadow-md hover:scale-105 transition-transform duration-200 mt-4"
                onClick={() => {
                    openStockModal()
                    setMenuOpen(false)
                }}
            >
                <div className="p-2 bg-primary-content/20 rounded-lg">
                    <Warehouse className='w-5 h-5 text-primary-content' />
                </div>
                <div className="flex-1 text-left">
                    <p className="font-medium">Alimenter le Stock</p>
                    <p className="text-sm opacity-80">Ajouter des produits au stock</p>
                </div>
            </button>
        </div>
    )

    if (!isClient) {
        return (
            <div className="h-16 bg-base-100 border-b border-base-300"></div>
        )
    }

    return (
        <>
            {/* Navbar Principale */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-base-100/95 backdrop-blur-md shadow-lg border-b border-base-300' 
                    : 'bg-base-100 border-b border-base-300'
            }`}>
                <div className="px-4 md:px-6 lg:px-8 py-3">
                    <div className="flex justify-between items-center">
                        {/* Logo et Brand */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="p-2 bg-gradient-to-br from-primary to-primary-focus rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                                <PackagePlus className="w-6 h-6 text-primary-content" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary-focus bg-clip-text text-transparent">
                                    Saran|NanaStock
                                </span>
                                <span className="text-xs text-base-content/60 -mt-1">
                                    Gestion de Stock Intelligente
                                </span>
                            </div>
                        </Link>

                        {/* Navigation Desktop */}
                        {renderDesktopLinks()}

                        {/* Bouton Menu Mobile */}
                        <div className="flex lg:hidden items-center gap-2">
                            <button
                                className="btn btn-ghost btn-sm hover:bg-base-300 transition-colors rounded-lg"
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Toggle menu"
                            >
                                {menuOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Overlay Mobile */}
                {menuOpen && (
                    <div 
                        className="lg:hidden fixed inset-0 bg-black/50 z-40"
                        onClick={() => setMenuOpen(false)}
                    />
                )}

                {/* Menu Mobile */}
                <div className={`lg:hidden fixed top-0 left-0 bottom-0 w-80 bg-base-100 z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                    <div className="p-6 h-full flex flex-col">
                        {/* Header Mobile */}
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-base-300">
                            <Link 
                                href="/" 
                                className="flex items-center gap-3"
                                onClick={() => setMenuOpen(false)}
                            >
                                <div className="p-2 bg-primary rounded-lg">
                                    <PackagePlus className="w-6 h-6 text-primary-content" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-lg text-primary">
                                        Saran|NanaStock
                                    </span>
                                    <span className="text-xs text-base-content/60">
                                        Gestion de Stock
                                    </span>
                                </div>
                            </Link>
                            <button
                                className="btn btn-ghost btn-sm rounded-lg"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Navigation Mobile */}
                        <nav className="flex-1">
                            {renderMobileLinks()}
                        </nav>

                        {/* Footer Mobile */}
                        <div className="pt-6 mt-6 border-t border-base-300">
                            <div className="flex items-center gap-3 p-3 bg-base-200 rounded-xl">
                                <UserButton />
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-sm truncate">
                                        {user?.fullName || 'Utilisateur'}
                                    </p>
                                    <p className="text-xs text-base-content/60 truncate">
                                        {user?.primaryEmailAddress?.emailAddress}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center">
                                <p className="text-xs text-base-content/40">
                                    © 2024 Saran|NanaStock
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Espacement pour la navbar fixe */}
            <div className="h-16"></div>

            {/* Modal pour Alimenter le Stock - Version simplifiée */}
            <dialog 
                id="stock_modal" 
                className={`modal ${stockModalOpen ? 'modal-open' : ''}`}
            >
                <div className="modal-box max-w-6xl max-h-[90vh] overflow-hidden p-0">
                    <div className="flex justify-between items-center p-6 border-b border-base-300 bg-base-200 sticky top-0 z-10">
                        <div className="flex items-center gap-3">
                            <Warehouse className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-bold">Alimenter le Stock</h3>
                        </div>
                        <button 
                            className="btn btn-sm btn-circle btn-ghost"
                            onClick={closeStockModal}
                        >
                            ✕
                        </button>
                    </div>
                    <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
                        <Stock />
                    </div>
                </div>
                <div className="modal-backdrop" onClick={closeStockModal}>
                    <button>close</button>
                </div>
            </dialog>
        </>
    )
}

export default Navbar