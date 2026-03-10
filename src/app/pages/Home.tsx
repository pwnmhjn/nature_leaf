import { useState, useMemo } from 'react';
import { plants, categories, nurseries } from '../data/mockData';
import { useAppContext } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ShoppingCart, Droplets, Sun, SlidersHorizontal, X } from 'lucide-react';
import { toast } from 'sonner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Slider } from '../components/ui/slider';

export function Home() {
  const { addToCart } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCareLevel, setSelectedCareLevel] = useState('All');
  const [selectedNursery, setSelectedNursery] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const maxPrice = Math.max(...plants.map(p => p.price));
  const minPrice = Math.min(...plants.map(p => p.price));

  const filteredAndSortedPlants = useMemo(() => {
    let filtered = plants;

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(plant => plant.category === selectedCategory);
    }

    // Care level filter
    if (selectedCareLevel !== 'All') {
      filtered = filtered.filter(plant => plant.careLevel === selectedCareLevel);
    }

    // Nursery filter
    if (selectedNursery !== 'All') {
      filtered = filtered.filter(plant => plant.nurseryId === selectedNursery);
    }

    // Price range filter
    filtered = filtered.filter(plant => 
      plant.price >= priceRange[0] && plant.price <= priceRange[1]
    );

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return sorted;
  }, [selectedCategory, selectedCareLevel, selectedNursery, priceRange, sortBy]);

  const handleAddToCart = (plant: typeof plants[0]) => {
    addToCart(plant);
    toast.success(`${plant.name} added to cart!`);
  };

  const getNurseryName = (nurseryId: string) => {
    return nurseries.find(n => n.id === nurseryId)?.name || '';
  };

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedCareLevel('All');
    setSelectedNursery('All');
    setPriceRange([0, 100]);
    setSortBy('name');
  };

  const activeFiltersCount = [
    selectedCategory !== 'All',
    selectedCareLevel !== 'All',
    selectedNursery !== 'All',
    priceRange[0] !== 0 || priceRange[1] !== 100,
  ].filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
          Discover Your Perfect Plant
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse our curated collection of {plants.length} eco-friendly plants from {nurseries.length} local nurseries. 
          Sustainable delivery right to your doorstep.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge className="ml-1 bg-green-600">{activeFiltersCount}</Badge>
            )}
          </Button>
          
          {activeFiltersCount > 0 && (
            <Button variant="ghost" size="sm" onClick={resetFilters} className="text-gray-600">
              <X className="w-4 h-4 mr-1" />
              Clear all
            </Button>
          )}

          <div className="text-sm text-gray-600">
            {filteredAndSortedPlants.length} plants found
          </div>
        </div>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name (A-Z)</SelectItem>
            <SelectItem value="price-low">Price (Low to High)</SelectItem>
            <SelectItem value="price-high">Price (High to Low)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Advanced Filters Panel */}
      {showFilters && (
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category Filter */}
              <div>
                <label className="text-sm font-semibold text-green-900 mb-2 block">
                  Category
                </label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Care Level Filter */}
              <div>
                <label className="text-sm font-semibold text-green-900 mb-2 block">
                  Care Level
                </label>
                <Select value={selectedCareLevel} onValueChange={setSelectedCareLevel}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Levels</SelectItem>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Moderate">Moderate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Nursery Filter */}
              <div>
                <label className="text-sm font-semibold text-green-900 mb-2 block">
                  Nursery
                </label>
                <Select value={selectedNursery} onValueChange={setSelectedNursery}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Nurseries</SelectItem>
                    {nurseries.map((nursery) => (
                      <SelectItem key={nursery.id} value={nursery.id}>
                        {nursery.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="text-sm font-semibold text-green-900 mb-2 block">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={Math.floor(minPrice)}
                  max={Math.ceil(maxPrice)}
                  step={1}
                  className="mt-2"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Category Quick Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'bg-green-600 hover:bg-green-700' : ''}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedPlants.map((plant) => (
          <Card key={plant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-green-600">
                  {plant.careLevel}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg text-green-900 mb-1">
                {plant.name}
              </h3>
              <p className="text-xs text-gray-500 italic mb-2">
                {plant.scientificName}
              </p>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {plant.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                <div className="flex items-center gap-1">
                  <Sun className="w-3 h-3 text-yellow-500" />
                  {plant.lightRequirement}
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-600 mb-3">
                <Droplets className="w-3 h-3 text-blue-500" />
                {plant.waterRequirement}
              </div>
              <p className="text-xs text-green-600 mb-2">
                From: {getNurseryName(plant.nurseryId)}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-900">
                  ${plant.price.toFixed(2)}
                </span>
                {plant.inStock && (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    In Stock
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => handleAddToCart(plant)}
                disabled={!plant.inStock}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredAndSortedPlants.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">No plants found with the selected filters.</p>
          <Button onClick={resetFilters} variant="outline">
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}