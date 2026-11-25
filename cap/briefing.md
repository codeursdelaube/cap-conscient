# BRIEFING — Site vitrine CAP CONSCIENT

> Document à lire en entier AVANT d'écrire la moindre ligne de code.
> Il décrit **ce qu'est le site**, **comment il doit se sentir** et **comment il doit être construit** (design, animations, structure).

---

## 1. Présentation du projet

**Client** : CAP CONSCIENT — *Communauté des Acteurs du Potentiel Conscient*, association humanitaire basée à Lomé (Togo), laïque, apolitique et à but non lucratif.

**Signature de l'association** : *Association humanitaire pour l'éveil.*

**Type de site** : site vitrine (pas d'e-commerce, pas de base de données, pas d'authentification). Le contenu est statique et facile à modifier depuis un fichier de données.

**Mission en une phrase** : promouvoir le développement communautaire et améliorer les conditions de vie des populations à la base, en éveillant le potentiel de chaque personne.

**Accroche principale** : *« Éveiller le potentiel, transformer les communautés. »*

**Cible** :
- Partenaires, ONG, institutions et bailleurs potentiels.
- Futurs adhérents et bénévoles.
- Donateurs et sympathisants.
- Habitants des communautés concernées.

**Objectif du site** : faire comprendre en quelques secondes qui est l'association, ce qu'elle fait, pourquoi elle est crédible, et comment agir (adhérer, être bénévole, soutenir, contacter).

---

## 2. L'âme du site : ce qu'il doit faire ressentir

Le logo est un **lotus doré** qui entoure un **globe** (Afrique au centre) tenu par **deux mains**, avec une **étoile lumineuse** en dessous, le tout sur un **fond vert profond** avec un cerclage or.

Le site doit donc dégager :
- **Sérénité et éveil** : rythme lent, espace, respiration.
- **Premium et crédibilité** : sobre, élégant, jamais criard.
- **Ancrage africain et humain** : terre, racines, communauté.
- **Lumière** : l'or est une lumière qui se révèle, pas une décoration.

**Ce que le site ne doit PAS être** :
- Un site d'ONG générique (orange, urgence, misérabilisme).
- Un site surchargé d'effets qui nuisent à la lecture.
- Un site avec des animations rapides, agressives ou clignotantes.

**Référence d'inspiration (Charius)** : on s'en inspire **uniquement pour le rythme de la page** (hero fort, chiffres clés, causes, événements, appel à agir, témoignages). On ne reprend ni son style, ni ses couleurs, ni ses gros plans.

---

## 3. Identité visuelle

### 3.1 Palette (à déclarer en variables CSS / thème Tailwind v4)

| Rôle | Nom | Hex indicatif | Usage |
|---|---|---|---|
| Fond principal | Vert forêt profond | `#06241A` | Hero, sections sombres, footer |
| Fond secondaire | Vert très sombre | `#0B3326` | Cartes, sections alternées |
| Noir | Noir profond | `#0A0A0A` | Splash, overlays, textes sur fond clair |
| Or principal | Or doré | `#D4AF37` | Titres accentués, boutons, lignes, icônes |
| Or doux | Or clair / champagne | `#E8C766` | Hover, lueurs, dégradés |
| Terre | Café terre | `#4A3223` | Sections chaudes, cartes, séparateurs |
| Terre claire | Café au lait | `#7A5A3E` | Bordures, accents secondaires |
| Texte clair | Crème | `#F5EEDC` | Texte sur fonds sombres |
| Texte atténué | Crème grisé | `#CBBFA6` | Paragraphes secondaires |

> Ajuster légèrement les valeurs si le rendu le demande, mais **garder l'équilibre** : majorité de vert foncé et de noir, l'or en touches précises, le café terre pour réchauffer.

**Répartition recommandée** : ~55 % vert foncé / noir, ~20 % café terre, ~15 % crème (zones de lecture), ~10 % or.

### 3.2 Dégradés et lueurs
- Dégradés très doux : vert foncé vers noir, café terre vers vert foncé.
- Lueur dorée discrète (radial-gradient) derrière le logo, les titres clés et l'étoile.
- Fine bordure or (1 px) sur les cartes importantes, avec légère transparence.
- Grain/texture très léger optionnel sur les fonds sombres pour un rendu plus organique (opacité très faible).

### 3.3 Typographie
- **Titres** : serif élégante (ex. *Cormorant Garamond* ou *Playfair Display*), grandes tailles, interlettrage légèrement élargi sur les petits titres en capitales.
- **Corps** : sans-serif sobre et lisible (ex. *Inter*, *Manrope* ou *DM Sans*).
- **Petits labels** (sur-titres de sections) : capitales, espacement large, couleur or.
- Charger les polices via `next/font` pour éviter tout flash.

### 3.4 Motifs graphiques (inspirés du logo)
- **Pétales de lotus** : séparateurs de sections (SVG en trait or fin).
- **Étoile à 8 branches** : petit ornement au centre des séparateurs et des titres.
- **Cercle doré** : cadre pour les images rondes, badges, chiffres clés.
- **Lignes fines or** : filets sous les titres, qui se « dessinent » à l'apparition.

### 3.5 Composants UI
- **Boutons** : principal = fond or, texte vert très foncé, coins arrondis généreux ; secondaire = contour or, texte crème. Hover : lueur douce + léger déplacement, jamais brusque.
- **Cartes** : fond vert sombre ou café terre, bordure fine or translucide, ombre douce, coins arrondis.
- **Images** : coins arrondis, léger cadre or, overlay dégradé vert/noir pour garantir la lisibilité du texte posé dessus.
- **Navbar** : transparente au sommet, devient vert foncé translucide avec flou (backdrop-blur) après scroll.

---

## 4. Stack technique

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4** (thème via variables CSS) — DaisyUI autorisé pour les composants de base, avec un **thème personnalisé** reprenant la palette ci-dessus.
- **GSAP** + **ScrollTrigger** (animations liées au scroll, timelines)
- **Lenis** (smooth scroll)
- **Motion** (ex-Framer Motion, import depuis `motion/react`) pour les transitions de composants, apparitions, hover et animations de navigation
- **Lucide React** pour les icônes
- Pas de base de données. Contenu dans `src/data/*.ts`.

---

## 5. Répartition des rôles entre les trois librairies

Pour éviter les conflits, chaque librairie a un rôle précis :

| Librairie | Rôle | À ne PAS utiliser pour |
|---|---|---|
| **Lenis** | Défilement fluide global | Animer des éléments |
| **GSAP + ScrollTrigger** | Séquences complexes liées au scroll : hero, parallax, pin, révélations de texte, compteurs, splash | Hover simples, micro-interactions |
| **Motion** | Transitions de montage/démontage, menu mobile, hover/tap, apparitions simples, transitions entre pages | Animations scrubbées au scroll |

**Règle d'or** : un même élément ne doit jamais être animé par deux librairies à la fois.

---

## 6. Mise en place du smooth scroll (Lenis + GSAP)

- Créer un composant client `SmoothScroll` placé dans le layout racine.
- Initialiser **Lenis** une seule fois, avec une durée douce (inertie lente, ressenti « apaisé »).
- **Synchroniser Lenis avec ScrollTrigger** : à chaque événement de scroll de Lenis, appeler `ScrollTrigger.update()`.
- Faire piloter Lenis par le **ticker de GSAP** (`gsap.ticker.add`) et désactiver le lissage de lag de GSAP (`gsap.ticker.lagSmoothing(0)`) pour éviter les saccades.
- Enregistrer les plugins GSAP une seule fois (`gsap.registerPlugin(ScrollTrigger)`).
- **Bloquer le scroll** (`lenis.stop()`) pendant le splash, puis le relancer (`lenis.start()`) à la fin.
- Nettoyer proprement (destroy / kill) au démontage pour éviter les doublons en mode développement.
- Utiliser `useGSAP` (ou `gsap.context`) dans chaque composant pour un nettoyage automatique.
- Respecter **`prefers-reduced-motion`** : si activé, désactiver Lenis, le parallax et les grosses animations, et afficher le contenu directement.

---

## 7. Splash de chargement (avant la page d'accueil)

**But** : une entrée solennelle et courte qui installe l'ambiance « éveil » et masque le chargement des images lourdes.

### 7.1 Contenu
- Fond **noir très profond** qui tire légèrement vers le vert foncé (dégradé radial).
- **Une image fournie par moi** au centre (je donnerai le fichier : logo ou visuel de lotus/globe). Cadre circulaire avec fine bordure or.
- Sous l'image : le nom **CAP CONSCIENT** en serif dorée, et en dessous la signature *« Association humanitaire pour l'éveil »* en petites capitales.
- Une **barre de progression** fine en or (ou un anneau doré qui se remplit), avec un pourcentage discret.

### 7.2 Séquence d'animation (timeline GSAP)
1. **0,0 s** : écran noir. L'image apparaît en fondu avec un léger zoom-out (de 1.15 à 1) et une lueur dorée qui pulse doucement derrière.
2. **0,4 s** : le nom CAP CONSCIENT se révèle lettre par lettre (ou mot par mot) avec un masque qui monte, lettres en or.
3. **0,8 s** : la signature apparaît en fondu, décalée vers le haut.
4. **0,4 → 2,6 s** : la barre de progression se remplit. Elle reflète le **vrai chargement** (images critiques du hero préchargées) mais ne doit jamais être plus courte qu'une durée minimale (~2,2 s) pour que la séquence soit perçue.
5. **Sortie** : l'image et les textes s'estompent en glissant vers le haut, puis **deux panneaux** (vert foncé et café terre) s'ouvrent comme un rideau (haut et bas, ou gauche et droite) pour révéler la page d'accueil. Léger easing « expo/power4 ».
6. **Juste après** : le hero démarre sa propre animation d'entrée (voir section 9.1) et Lenis est réactivé.

### 7.3 Règles techniques
- Composant `Splash` monté dans le layout, au-dessus de tout (`position: fixed; inset: 0; z-index` très élevé).
- Bloquer le scroll pendant l'affichage (`lenis.stop()` + `overflow: hidden` sur le body).
- Précharger l'image du splash en priorité (`priority` / `fetchPriority="high"`) ; précharger les 2 ou 3 images du hero avant la sortie.
- **Afficher le splash une seule fois par session** (flag `sessionStorage`) pour ne pas agacer en navigation. Lors des visites suivantes dans la même session : pas de splash, affichage direct.
- Prévoir un **bouton « Passer »** discret apparaissant après ~1 s.
- Si `prefers-reduced-motion` : splash réduit à un simple fondu de 0,6 s.
- Pas de flash du contenu de la page avant le splash : masquer le contenu tant que le splash n'est pas terminé (état global, ex. contexte ou store léger).
- Garantir un **plafond de sécurité** (ex. 6 s) : si les images tardent, on sort du splash quand même.

---

## 8. Principes d'animation (cohérence globale)

- **Rythme** : lent et doux. Durées 0,8 à 1,4 s pour les révélations, 0,3 à 0,5 s pour les interactions.
- **Easing** : `power3.out` / `expo.out` pour les entrées ; `power2.inOut` pour les transitions ; ressort doux pour Motion (stiffness modérée, amortissement élevé).
- **Révélation de texte** : titres découpés par lignes ou mots, masqués (`overflow: hidden`), qui montent en fondu. Décalage (stagger) de 0,06 à 0,12 s.
- **Filets or** : se dessinent de gauche à droite (scaleX de 0 à 1) sous les titres.
- **Images** : apparition par un masque qui s'ouvre (clip-path) + très léger zoom-out ; parallax subtil au scroll (vitesse 5 à 15 %).
- **Compteurs** : les chiffres clés comptent de 0 à la valeur quand la section entre dans le viewport (une seule fois).
- **Déclencheurs ScrollTrigger** : `start: "top 80%"` par défaut, `once: true` pour les révélations (pas de rejouage au scroll arrière).
- **Particules/lucioles dorées** : très peu, très lentes, en arrière-plan du hero uniquement (canvas ou éléments absolus), désactivées sur mobile et en mode réduit.
- **Performance** : animer uniquement `transform` et `opacity` ; `will-change` ciblé ; pas d'animation de propriétés qui déclenchent du layout.
- **Mobile** : réduire les parallax, raccourcir les durées, conserver la fluidité avant tout.

---

## 9. Structure des pages et comportement de chaque section

### 9.1 Accueil (`/`)

**1. Hero plein écran**
- Fond vert foncé/noir avec dégradé radial doré derrière un visuel central.
- Image ou logo fourni (lotus + globe) en élément central, qui **respire** (légère montée/descente et rotation très lente) et profite d'un parallax léger.
- Sur-titre en capitales dorées : *Association humanitaire pour l'éveil*.
- Titre : *« Éveiller le potentiel, transformer les communautés. »* révélé ligne par ligne (GSAP).
- Sous-texte de 2 lignes maximum résumant la mission.
- Deux boutons : **« Découvrir nos actions »** (or) et **« Nous rejoindre »** (contour).
- Indicateur de scroll (petite étoile dorée qui descend le long d'un filet).
- Animation d'entrée enchaînée juste après l'ouverture du rideau du splash.

**2. Bandeau de valeurs (marquee)**
- Défilement horizontal lent de mots-clés séparés par l'étoile dorée : *Éveil · Éducation · Leadership · Santé · Environnement · Autonomisation · Communauté*.
- Vitesse liée au scroll (accélère légèrement quand l'utilisateur défile).

**3. Présentation (qui sommes-nous)**
- Disposition en deux colonnes : texte à gauche, image arrondie à droite avec cadre or et parallax.
- Texte court (3 à 4 phrases) sur la nature de l'association : laïque, apolitique, à but non lucratif, au service des populations à la base.
- Petit encart « Notre promesse » avec le lotus en filigrane.
- Bouton vers la page À propos.

**4. Les 5 piliers d'intervention**
- Section sur fond café terre.
- Cinq cartes (icône dorée, titre, 2 lignes de description) :
  1. **Éducation et formation** — accès à l'école, alphabétisation, formations adaptées au marché de l'emploi, apprentissage auprès d'artisans.
  2. **Enfance et santé** — droits et bien-être des enfants, soins de santé primaires, alimentation saine.
  3. **Éveil et leadership** — connaissance de soi, découverte du potentiel, engagement citoyen.
  4. **Environnement** — reboisement, protection des espaces verts et des ressources naturelles.
  5. **Autonomisation** — entrepreneuriat communautaire, activités génératrices de revenus, coopératives et groupements.
- Animation : les cartes entrent en cascade ; au hover, la bordure or s'illumine et l'icône s'élève légèrement (Motion).
- Option bonus sur desktop : section **épinglée (pin GSAP)** où les piliers défilent horizontalement pendant le scroll vertical.

**5. Chiffres clés**
- Fond vert foncé, 4 compteurs animés dans des cercles aux bords or (ex. enfants accompagnés, formations organisées, arbres plantés, bénévoles). **Valeurs à définir par le client** ; prévoir des données modifiables et des valeurs factices clairement marquées à remplacer.

**6. Actions récentes / Galerie**
- Grille masonry ou carrousel d'images fournies, avec révélation par clip-path.
- Au clic : ouverture plein écran (lightbox) avec transition Motion.

**7. Événements à venir** (si données disponibles)
- Cartes avec date en badge doré, titre, lieu, courte description.
- Section masquée si aucun événement n'est renseigné.

**8. Témoignages**
- Carrousel sobre (une citation à la fois), guillemets dorés, photo ronde cadrée or, transitions Motion.

**9. Appel à agir**
- Grand bloc fond vert foncé avec lotus doré en filigrane et lueur.
- Trois portes d'entrée : **Adhérer**, **Devenir bénévole**, **Soutenir l'association**.
- Boutons principaux bien visibles.

**10. Footer**
- Fond noir/vert très foncé, logo, mini-présentation, liens rapides, coordonnées, réseaux sociaux, mention « Association humanitaire pour l'éveil ».
- Séparateur lotus en haut du footer.

### 9.2 À propos (`/a-propos`)
- Hero de page plus court (titre + fil d'Ariane).
- Histoire et vision de l'association.
- Mission, but, valeurs : formulés de façon vivante, en phrases courtes (pas de copier-coller juridique).
- Section « Pourquoi *conscient* ? » expliquant le sens du nom et du logo (lotus = éveil, globe = communauté mondiale, mains = soin et responsabilité, étoile = lumière intérieure).
- Frise chronologique animée (GSAP ScrollTrigger) si l'association fournit des dates.

### 9.3 Nos actions (`/actions`)
- Introduction puis **un bloc détaillé par pilier**, en alternance gauche/droite avec images fournies.
- Chaque bloc : titre, texte, liste de 3 à 5 actions concrètes, image avec parallax.
- Navigation latérale collante (sticky) indiquant le pilier en cours.

### 9.4 Équipe (`/equipe`)
- Présentation du bureau exécutif (président, secrétariat général, trésorerie, organisation, communication) sous forme de cartes avec photo ronde cadrée or, nom et fonction.
- Données dans un fichier modifiable ; photos fournies par moi.

### 9.5 Galerie et actualités (`/galerie`, `/actualites`)
- Galerie filtrable par thème (Éducation, Santé, Environnement, Événements).
- Actualités : liste de cartes simples, page détail statique. Contenu fourni dans un fichier de données.

### 9.6 Agir (`/agir`)
- Trois sections : **Adhérer**, **Être bénévole**, **Soutenir**.
- Formulaires simples (nom, email, téléphone, message) avec validation côté client. Envoi via un service externe gratuit au choix (par ex. Formspree, ou lien WhatsApp/email préconfiguré). **Pas de base de données.**
- Section « Soutenir » : coordonnées pour faire un don ; prévoir l'emplacement d'une future intégration de paiement mobile (Mixx / Flooz) sans l'activer pour l'instant.

### 9.7 Contact (`/contact`)
- Coordonnées : Lomé, préfecture du Golfe, commune du Golfe 7, quartier Adidogomé Apédokoé, non loin d'EBOMAF ; téléphone **(+228) 99 01 19 01**.
- Formulaire de contact + carte intégrée (iframe Google Maps ou OpenStreetMap).
- Boutons rapides : appeler, WhatsApp.

---

## 10. Navigation globale

- **Navbar** : logo à gauche, liens (Accueil, À propos, Nos actions, Équipe, Galerie, Agir, Contact), bouton « Nous rejoindre » en or.
- Comportement : se masque au scroll vers le bas, réapparaît au scroll vers le haut ; fond translucide vert foncé après le premier écran.
- **Menu mobile** : panneau plein écran vert foncé qui s'ouvre avec un rideau (Motion), liens qui apparaissent en cascade, lotus doré en filigrane.
- **Transitions entre pages** : fondu + léger glissement vertical (Motion), cohérentes avec le rideau du splash (panneaux vert et café terre).
- **Curseur personnalisé (desktop, optionnel)** : petit point doré qui s'agrandit sur les éléments cliquables. Désactivé sur tactile.

---

## 11. Images

**Je fournirai les images au fur et à mesure.** Prévoir une structure claire et des **placeholders** là où l'image manque.

```
public/
  images/
    logo/          -> logo-cap-conscient.png (rond, fond vert) + version sans fond si dispo
    splash/        -> splash.jpg
    hero/          -> hero-1.jpg, hero-2.jpg ...
    about/         -> about-1.jpg ...
    actions/       -> education.jpg, sante.jpg, eveil.jpg, environnement.jpg, autonomisation.jpg
    gallery/       -> g-01.jpg ... g-20.jpg
    team/          -> membre-1.jpg ...
    textures/      -> (optionnel) grain, motifs
```

Règles :
- Utiliser `next/image` (tailles responsives, `priority` pour hero et splash, lazy-load pour le reste).
- Définir `alt` explicite sur chaque image.
- Appliquer systématiquement un **overlay dégradé vert/noir** sur les images portant du texte.
- Tant qu'une image manque : placeholder dégradé vert/café aux couleurs du site, **jamais** d'image d'une autre source.
- Photos d'enfants : cadrage digne et respectueux, jamais en gros plan misérabiliste.

---

## 12. Arborescence suggérée

```
src/
  app/
    layout.tsx
    page.tsx
    a-propos/page.tsx
    actions/page.tsx
    equipe/page.tsx
    galerie/page.tsx
    actualites/page.tsx
    agir/page.tsx
    contact/page.tsx
    globals.css          -> thème Tailwind v4 + variables palette
  components/
    layout/   Navbar, Footer, MobileMenu, PageTransition
    splash/   Splash
    providers/ SmoothScroll, SplashProvider
    sections/ Hero, Marquee, About, Pillars, Stats, Gallery, Events, Testimonials, CallToAction
    ui/       Button, Card, SectionTitle, LotusDivider, GoldLine, Counter, Lightbox
  data/       site.ts, pillars.ts, team.ts, gallery.ts, events.ts, testimonials.ts
  hooks/      useReducedMotion, useIsMobile
  lib/        gsap.ts (enregistrement des plugins), utils.ts
public/images/...
```

---

## 13. SEO, accessibilité, performance

- **Métadonnées** par page (titre, description, Open Graph avec image), favicon issu du logo, `lang="fr"`.
- Contrastes suffisants (texte crème sur vert foncé ; or réservé aux titres et accents, pas aux longs paragraphes).
- Navigation clavier complète, états `:focus-visible` dorés bien visibles.
- Respect de `prefers-reduced-motion` partout.
- Images optimisées, polices via `next/font`, pas de librairie inutile.
- Cible Lighthouse : 90+ en performance et accessibilité sur mobile.
- Site **100 % responsive** : mobile d'abord, puis tablette et desktop.

---

## 14. Ordre de construction recommandé

1. Initialiser le projet, le thème Tailwind v4 (palette, polices) et le `globals.css`.
2. Mettre en place `lib/gsap.ts`, `SmoothScroll` (Lenis + GSAP) et le contexte du splash.
3. Construire le **Splash** et valider sa séquence complète.
4. Construire Navbar, Footer, menu mobile et transitions de page.
5. Construire la page d'accueil section par section (Hero en premier), en validant chaque animation.
6. Construire les pages secondaires en réutilisant les composants UI.
7. Brancher les formulaires, la carte et les métadonnées SEO.
8. Passe finale : responsive, accessibilité, performance, nettoyage des animations.

---

## 15. Critères de réussite

- Au premier coup d'œil, le site **ressemble à l'association** : vert foncé, noir, or, café terre, lotus et lumière.
- Le splash est **élégant, court et ne bloque jamais** l'utilisateur.
- Le scroll est fluide, les animations sont **douces et cohérentes**, aucune saccade.
- Le message de l'association est compris en moins de 10 secondes.
- Le contenu est **facile à modifier** (fichiers de données, images dans `public/`).
- Aucun style « ONG générique » : l'inspiration de Charius reste limitée au rythme de la page.
