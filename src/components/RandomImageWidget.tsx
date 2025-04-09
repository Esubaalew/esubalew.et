import { useState, useEffect, useRef } from 'react';
import { 
  Image, X, RefreshCw, Quote, Download, Share2, 
  Heart, Bookmark, Filter, Camera, Mountain, 
  Sunrise, Palmtree, Building, Coffee, 
  Maximize2, Minimize2, GripHorizontal 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';

// Define image and quote types
interface RandomImage {
  id: string;
  url: string;
  alt: string;
  category: string;
  size: { width: number; height: number };
}

interface RandomQuote {
  id: string;
  text: string;
  author: string;
  category: string;
}

interface SavedFavorite {
  id: string;
  imageId: string;
  quoteId: string;
  timestamp: number;
}

// Image categories
const IMAGE_CATEGORIES = {
  ALL: 'All',
  NATURE: 'Nature',
  MOUNTAINS: 'Mountains',
  OCEAN: 'Ocean',
  CITYSCAPE: 'Cityscape',
  MINIMALIST: 'Minimalist'
};

// Quote categories
const QUOTE_CATEGORIES = {
  ALL: 'All',
  MOTIVATION: 'Motivation',
  SUCCESS: 'Success',
  LIFE: 'Life',
  WISDOM: 'Wisdom'
};

// Sample images with proper dimensions and categories
const images: RandomImage[] = [
  {
    id: 'image1',
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    alt: 'Mountain landscape with sunset',
    category: IMAGE_CATEGORIES.MOUNTAINS,
    size: { width: 800, height: 600 }
  },
  {
    id: 'image2',
    url: 'https://images.unsplash.com/photo-1551806235-6043d6d2e4e5',
    alt: 'Ocean waves crashing on shore',
    category: IMAGE_CATEGORIES.OCEAN,
    size: { width: 800, height: 600 }
  },
  {
    id: 'image3',
    url: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3',
    alt: 'Night sky with stars',
    category: IMAGE_CATEGORIES.NATURE,
    size: { width: 800, height: 600 }
  },
  {
    id: 'image4',
    url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e',
    alt: 'Countryside with green fields',
    category: IMAGE_CATEGORIES.NATURE,
    size: { width: 800, height: 600 }
  },
  {
    id: 'image5',
    url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
    alt: 'Mountain lake reflection',
    category: IMAGE_CATEGORIES.MOUNTAINS,
    size: { width: 800, height: 600 }
  },
  {
    id: 'image6',
    url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    alt: 'Forest path with sunlight',
    category: IMAGE_CATEGORIES.NATURE,
    size: { width: 800, height: 600 }
  },
  {
    id: 'image7',
    url: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24',
    alt: 'Cityscape from above',
    category: IMAGE_CATEGORIES.CITYSCAPE,
    size: { width: 800, height: 600 }
  },
  {
    id: 'image8',
    url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
    alt: 'Minimalist space with single object',
    category: IMAGE_CATEGORIES.MINIMALIST,
    size: { width: 800, height: 600 }
  }
];

// Sample inspirational quotes with categories
const quotes: RandomQuote[] = [
  {
    id: 'quote1',
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    category: QUOTE_CATEGORIES.SUCCESS
  },
  {
    id: 'quote2',
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: QUOTE_CATEGORIES.MOTIVATION
  },
  {
    id: 'quote3',
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: QUOTE_CATEGORIES.MOTIVATION
  },
  {
    id: 'quote4',
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: QUOTE_CATEGORIES.LIFE
  },
  {
    id: 'quote5',
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: QUOTE_CATEGORIES.SUCCESS
  },
  {
    id: 'quote6',
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: QUOTE_CATEGORIES.MOTIVATION
  },
  {
    id: 'quote7',
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: QUOTE_CATEGORIES.WISDOM
  },
  {
    id: 'quote8',
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: QUOTE_CATEGORIES.MOTIVATION
  },
  {
    id: 'quote9',
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
    category: QUOTE_CATEGORIES.WISDOM
  },
  {
    id: 'quote10',
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: QUOTE_CATEGORIES.WISDOM
  },
  {
    id: 'quote11',
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: QUOTE_CATEGORIES.LIFE
  },
  {
    id: 'quote12',
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
    category: QUOTE_CATEGORIES.LIFE
  }
];

// Get category icon component
const getCategoryIcon = (category: string) => {
  switch(category) {
    case IMAGE_CATEGORIES.NATURE:
      return <Palmtree className="h-4 w-4" />;
    case IMAGE_CATEGORIES.MOUNTAINS:
      return <Mountain className="h-4 w-4" />;
    case IMAGE_CATEGORIES.OCEAN:
      return <Sunrise className="h-4 w-4" />;
    case IMAGE_CATEGORIES.CITYSCAPE:
      return <Building className="h-4 w-4" />;
    case IMAGE_CATEGORIES.MINIMALIST:
      return <Coffee className="h-4 w-4" />;
    default:
      return <Camera className="h-4 w-4" />;
  }
};

const RandomImageWidget = () => {
  const { toast } = useToast();
  const widgetRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('generate');
  const [currentImage, setCurrentImage] = useState<RandomImage | null>(null);
  const [currentQuote, setCurrentQuote] = useState<RandomQuote | null>(null);
  const [favorites, setFavorites] = useState<SavedFavorite[]>([]);
  const [selectedImageCategory, setSelectedImageCategory] = useState<string>(IMAGE_CATEGORIES.ALL);
  const [selectedQuoteCategory, setSelectedQuoteCategory] = useState<string>(QUOTE_CATEGORIES.ALL);
  const [imageTransitioning, setImageTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 400, height: 500 });
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Load favorites and position from localStorage on mount
  useEffect(() => {
    // Load favorites
    const savedFavorites = localStorage.getItem('inspirationFavorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (e) {
        console.error('Failed to parse saved favorites');
      }
    }
    
    // Load position
    const savedPosition = localStorage.getItem('inspirationPosition');
    if (savedPosition) {
      try {
        setPosition(JSON.parse(savedPosition));
      } catch (e) {
        console.error('Failed to parse saved position');
      }
    }
    
    // Load size
    const savedSize = localStorage.getItem('inspirationSize');
    if (savedSize) {
      try {
        setSize(JSON.parse(savedSize));
      } catch (e) {
        console.error('Failed to parse saved size');
      }
    }
  }, []);

  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem('inspirationFavorites', JSON.stringify(favorites));
  }, [favorites]);
  
  // Save position to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('inspirationPosition', JSON.stringify(position));
  }, [position]);
  
  // Save size to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('inspirationSize', JSON.stringify(size));
  }, [size]);
  
  // Handle click outside to close widget
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && 
          widgetRef.current && 
          cardRef.current && 
          !cardRef.current.contains(event.target as Node) &&
          !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  // Start dragging
  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };
  
  // Handle dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - startPos.x,
          y: e.clientY - startPos.y
        });
      }
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startPos]);
  
  // Toggle widget size
  const toggleSize = () => {
    if (isExpanded) {
      // Return to previous size
      setSize({ width: 400, height: 500 });
    } else {
      // Expand to larger size
      setSize({ width: 600, height: 700 });
    }
    setIsExpanded(!isExpanded);
  };

  // Filter images by selected category
  const filteredImages = selectedImageCategory === IMAGE_CATEGORIES.ALL
    ? images
    : images.filter(img => img.category === selectedImageCategory);

  // Filter quotes by selected category
  const filteredQuotes = selectedQuoteCategory === QUOTE_CATEGORIES.ALL
    ? quotes
    : quotes.filter(quote => quote.category === selectedQuoteCategory);

  // Function to generate a random image and quote based on selected categories
  const generateRandom = () => {
    setImageTransitioning(true);
    
    // Use setTimeout to allow the transition effect to show
    setTimeout(() => {
      const randomImageIndex = Math.floor(Math.random() * filteredImages.length);
      const randomQuoteIndex = Math.floor(Math.random() * filteredQuotes.length);
      
      setCurrentImage(filteredImages[randomImageIndex]);
      setCurrentQuote(filteredQuotes[randomQuoteIndex]);
      setImageTransitioning(false);
    }, 300);
  };

  // Initialize with a random image and quote on first open
  useEffect(() => {
    if (isOpen && (!currentImage || !currentQuote)) {
      generateRandom();
    }
  }, [isOpen, selectedImageCategory, selectedQuoteCategory]);

  // Function to save current combination to favorites
  const saveFavorite = () => {
    if (!currentImage || !currentQuote) return;
    
    const newFavorite: SavedFavorite = {
      id: `fav-${Date.now()}`,
      imageId: currentImage.id,
      quoteId: currentQuote.id,
      timestamp: Date.now()
    };
    
    setFavorites(prev => [...prev, newFavorite]);
    
    toast({
      title: "Saved to favorites!",
      description: "You can access this in your favorites tab."
    });
  };

  // Function to load a saved favorite
  const loadFavorite = (favorite: SavedFavorite) => {
    const savedImage = images.find(img => img.id === favorite.imageId);
    const savedQuote = quotes.find(q => q.id === favorite.quoteId);
    
    if (savedImage && savedQuote) {
      setCurrentImage(savedImage);
      setCurrentQuote(savedQuote);
      setActiveTab('generate');
    }
  };

  // Function to simulate downloading the image with quote
  const downloadImage = () => {
    toast({
      title: "Download started",
      description: "Your inspiration card is being prepared for download."
    });
    
    // In a real app, this would generate a downloadable image with the quote
    setTimeout(() => {
      toast({
        title: "Download complete",
        description: "Your inspiration card has been saved."
      });
    }, 1500);
  };

  // Function to simulate sharing
  const shareImage = () => {
    // In a real app, this would open a share dialog
    if (navigator.share) {
      navigator.share({
        title: `Quote by ${currentQuote?.author}`,
        text: currentQuote?.text,
        url: window.location.href,
      })
      .catch(() => {
        toast({
          title: "Shared!",
          description: "Your inspiration has been copied to clipboard."
        });
      });
    } else {
      toast({
        title: "Shared!",
        description: "Your inspiration has been copied to clipboard."
      });
    }
  };

  // Check if current combination is in favorites
  const isInFavorites = () => {
    if (!currentImage || !currentQuote) return false;
    
    return favorites.some(
      fav => fav.imageId === currentImage.id && fav.quoteId === currentQuote.id
    );
  };

  // Generate UI tabs for the widget
  const generateTab = (
    <>
      <div className="p-3 bg-secondary/50 backdrop-blur-sm flex flex-wrap gap-2 border-b border-border">
        <div className="flex items-center gap-1.5">
          <Filter className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Filters:</span>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <select 
            value={selectedImageCategory}
            onChange={(e) => setSelectedImageCategory(e.target.value)}
            className="text-xs bg-background/70 border border-border rounded px-2 py-1"
          >
            {Object.values(IMAGE_CATEGORIES).map(category => (
              <option key={`img-${category}`} value={category}>
                {category} Images
              </option>
            ))}
          </select>
          
          <select 
            value={selectedQuoteCategory}
            onChange={(e) => setSelectedQuoteCategory(e.target.value)}
            className="text-xs bg-background/70 border border-border rounded px-2 py-1"
          >
            {Object.values(QUOTE_CATEGORIES).map(category => (
              <option key={`quote-${category}`} value={category}>
                {category} Quotes
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {currentImage && currentQuote && (
        <>
          <CardContent className="p-0 overflow-hidden flex-grow relative">
            <div className={`relative aspect-video w-full overflow-hidden transition-opacity duration-300 ${imageTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <img
                src={currentImage.url}
                alt={currentImage.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge variant="secondary" className="bg-background/50 backdrop-blur-md border-none flex gap-1 items-center">
                  {getCategoryIcon(currentImage.category)}
                  {currentImage.category}
                </Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-4 w-full">
                  <div className="flex items-start gap-2 mb-2">
                    <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-white font-medium italic">
                      {currentQuote.text}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-white/80 text-sm">
                      — {currentQuote.author}
                    </p>
                    <Badge variant="outline" className="bg-background/20 backdrop-blur-sm border-none text-white/90">
                      {currentQuote.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-background/50 backdrop-blur-md"
                      onClick={downloadImage}
                      aria-label="Download"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-background/50 backdrop-blur-md"
                      onClick={shareImage}
                      aria-label="Share"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className={`h-8 w-8 rounded-full bg-background/50 backdrop-blur-md ${isInFavorites() ? 'text-red-500' : ''}`}
                      onClick={saveFavorite}
                      disabled={isInFavorites()}
                      aria-label={isInFavorites() ? "Already in favorites" : "Save to favorites"}
                    >
                      <Heart className={`h-4 w-4 ${isInFavorites() ? 'fill-current' : ''}`} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{isInFavorites() ? "Already saved" : "Save to favorites"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardContent>
          
          <CardFooter className="p-3 bg-secondary/80 backdrop-blur-sm border-t border-border">
            <Button 
              onClick={generateRandom}
              className="w-full gradient-button"
              disabled={imageTransitioning}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${imageTransitioning ? 'animate-spin' : ''}`} />
              New Inspiration
            </Button>
          </CardFooter>
        </>
      )}
    </>
  );
  
  // Favorites tab
  const favoritesTab = (
    <>
      <div className="flex-grow overflow-auto p-4">
        {favorites.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 text-muted-foreground">
            <Bookmark className="h-12 w-12 mb-4 opacity-20" />
            <h3 className="text-lg font-medium mb-2">No favorites yet</h3>
            <p className="text-sm">
              Your saved inspirations will appear here. Go to the Generate tab and click the heart icon to save your favorites.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {favorites.map(favorite => {
              const favImage = images.find(img => img.id === favorite.imageId);
              const favQuote = quotes.find(q => q.id === favorite.quoteId);
              
              if (!favImage || !favQuote) return null;
              
              return (
                <Card key={favorite.id} className="overflow-hidden cursor-pointer hover:shadow-md transition-all" onClick={() => loadFavorite(favorite)}>
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={favImage.url} 
                      alt={favImage.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-3 w-full">
                        <p className="text-white text-sm font-medium italic line-clamp-2">
                          "{favQuote.text}"
                        </p>
                        <p className="text-white/80 text-xs mt-1">
                          — {favQuote.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
      
      {favorites.length > 0 && (
        <CardFooter className="p-3 bg-secondary/80 backdrop-blur-sm border-t border-border">
          <Button 
            variant="outline"
            onClick={() => {
              if (confirm("Are you sure you want to clear all favorites?")) {
                setFavorites([]);
                toast({
                  title: "Favorites cleared",
                  description: "All your saved inspirations have been removed."
                });
              }
            }}
            className="w-full text-muted-foreground"
          >
            Clear All Favorites
          </Button>
        </CardFooter>
      )}
    </>
  );

  return (
    <div id="random-image-widget" className="random-widget" style={{ zIndex: 9999 }} ref={widgetRef}>
      {/* Floating button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setIsOpen(true)}
              className="fixed rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 gradient-button"
              style={{ 
                right: '2rem', 
                bottom: '2rem', 
                left: 'auto',
                position: 'fixed',
                zIndex: 9999
              }}
              aria-label="Open inspiration widget"
            >
              <Image className="h-6 w-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Get inspired</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Image and quote card */}
      {isOpen && (
        <Card 
          ref={cardRef}
          className="fixed flex flex-col shadow-xl border border-border gradient-card card-animation"
          style={{ 
            position: 'fixed',
            top: `${position.y}px`,
            left: `${position.x}px`,
            width: `${size.width}px`,
            height: `${size.height}px`,
            zIndex: 9999,
            resize: 'both',
            overflow: 'hidden',
            cursor: isDragging ? 'grabbing' : 'auto'
          }}
        >
          <CardHeader className="p-4 flex-none bg-secondary/80 backdrop-blur-sm border-b border-border">
            <div 
              className="flex justify-between items-center mb-4 cursor-grab" 
              onMouseDown={handleDragStart}
            >
              <div className="flex items-center gap-2">
                <GripHorizontal className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm font-medium">Inspiration Generator</h3>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleSize}
                  className="h-8 w-8 opacity-80 hover:opacity-100"
                  aria-label={isExpanded ? "Minimize" : "Maximize"}
                >
                  {isExpanded ? 
                    <Minimize2 className="h-4 w-4" /> : 
                    <Maximize2 className="h-4 w-4" />}
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 opacity-80 hover:opacity-100"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="generate">Generate</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          
          <div className="flex-grow overflow-hidden flex flex-col">
            {activeTab === 'generate' ? generateTab : favoritesTab}
          </div>
        </Card>
      )}
    </div>
  );
};

export default RandomImageWidget;