from django.shortcuts import render
from .models import CarCategory, CarState, CarBrand, CarModel, Car
from .serializers import CarCategorySerializer, CarStateSerializer, CarBrandSerializer, CarModelSerializer, CarSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView

# __________________________________________________________ CAR CATEGORY VIEWS _________________________________________________________________________

class CarCategoryListView(ListCreateAPIView):
    queryset = CarCategory.objects.all()
    serializer_class = CarCategorySerializer
    model = CarCategory
    context_object_name = 'car_categories'
    ordering = ['name']
    paginate_by = 10

    def perform_create(self, serializer):
        return super().perform_create(serializer)
    
car_categories_create_list = CarCategoryListView.as_view()

class CarCategoryDetailView(RetrieveAPIView):
    queryset = CarCategory.objects.all()
    serializer_class = CarCategorySerializer
    model = CarCategory
    context_object_name = 'car_category'
    ordering = ['name']
    paginate_by = 10

car_category_detail = CarCategoryDetailView.as_view()

class CarCategoryDeleteView(DestroyAPIView):
    queryset = CarCategory.objects.all()
    serializer_class = CarCategorySerializer
    model = CarCategory
    context_object_name = 'car_category'
    ordering = ['name']
    paginate_by = 10

car_category_delete = CarCategoryDeleteView.as_view()

class CarCategoryUpdateView(UpdateAPIView):
    queryset = CarCategory.objects.all()
    serializer_class = CarCategorySerializer
    model = CarCategory
    context_object_name = 'car_category'
    ordering = ['name']
    paginate_by = 10

car_category_update = CarCategoryUpdateView.as_view()


# _____________________________________________________________________________ CAR STATE VIEWS _____________________________________________________________________________________

class CarStateListView(ListCreateAPIView):
    queryset = CarState.objects.all()
    serializer_class = CarStateSerializer
    model = CarState
    context_object_name = 'car_states'
    ordering = ['name']
    paginate_by = 10

    def perform_create(self, serializer):
        return super().perform_create(serializer)
    
car_states_create_list = CarStateListView.as_view()

class CarStateDetailView(RetrieveAPIView):
    queryset = CarState.objects.all()
    serializer_class = CarStateSerializer
    model = CarState
    context_object_name = 'car_state'
    ordering = ['name']
    paginate_by = 10

car_state_detail = CarStateDetailView.as_view()

class CarStateDeleteView(DestroyAPIView):
    queryset = CarState.objects.all()
    serializer_class = CarStateSerializer
    model = CarState
    context_object_name = 'car_state'
    ordering = ['name']
    paginate_by = 10

car_state_delete = CarStateDeleteView.as_view()

class CarStateUpdateView(UpdateAPIView):
    queryset = CarState.objects.all()
    serializer_class = CarStateSerializer
    model = CarState
    context_object_name = 'car_state'
    ordering = ['name']
    paginate_by = 10

car_state_update = CarStateUpdateView.as_view()

# __________________________________________________________________ CAR BRAND VIEWS _________________________________________________________________________

class CarBrandListView(ListCreateAPIView):
    queryset = CarBrand.objects.all()
    serializer_class = CarBrandSerializer
    model = CarBrand
    context_object_name = 'car_brands'
    ordering = ['name']
    paginate_by = 10

    def perform_create(self, serializer):
        return super().perform_create(serializer)
    
car_brands_create_list = CarBrandListView.as_view()

class CarBrandDetailView(RetrieveAPIView):
    queryset = CarBrand.objects.all()
    serializer_class = CarBrandSerializer
    model = CarBrand
    context_object_name = 'car_brand'
    ordering = ['name']
    paginate_by = 10

car_brand_detail = CarBrandDetailView.as_view()

class CarBrandDeleteView(DestroyAPIView):
    queryset = CarBrand.objects.all()
    serializer_class = CarBrandSerializer
    model = CarBrand
    context_object_name = 'car_brand'
    ordering = ['name']
    paginate_by = 10

car_brand_delete = CarBrandDeleteView.as_view()

class CarBrandUpdateView(UpdateAPIView):
    queryset = CarBrand.objects.all()
    serializer_class = CarBrandSerializer
    model = CarBrand
    context_object_name = 'car_brand'
    ordering = ['name']
    paginate_by = 10

car_brand_update = CarBrandUpdateView.as_view()

# _________________________________________________________________________________ CAR MODEL VIEWS ______________________________________________________________________________________

class CarModelListView(ListCreateAPIView):
    queryset = CarModel.objects.all()
    serializer_class = CarModelSerializer
    model = CarModel
    context_object_name = 'car_models'
    ordering = ['name']
    paginate_by = 10

    def perform_create(self, serializer):
        return super().perform_create(serializer)
    
car_models_create_list = CarModelListView.as_view()

class CarModelDetailView(RetrieveAPIView):
    queryset = CarModel.objects.all()
    serializer_class = CarModelSerializer
    model = CarModel
    context_object_name = 'car_model'
    ordering = ['name']
    paginate_by = 10

car_model_detail = CarModelDetailView.as_view()

class CarModelDeleteView(DestroyAPIView):
    queryset = CarModel.objects.all()
    serializer_class = CarModelSerializer
    model = CarModel
    context_object_name = 'car_model'
    ordering = ['name']
    paginate_by = 10

car_model_delete = CarModelDeleteView.as_view()

class CarModelUpdateView(UpdateAPIView):
    queryset = CarModel.objects.all()
    serializer_class = CarModelSerializer
    model = CarModel
    context_object_name = 'car_model'
    ordering = ['name']
    paginate_by = 10

car_model_update = CarModelUpdateView.as_view()

# ______________________________________________________________________ CAR VIEWS _________________________________________________________________________

class CarListView(ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    model = Car
    context_object_name = 'cars'
    ordering = ['name']
    paginate_by = 10

    def perform_create(self, serializer):
        return super().perform_create(serializer)
    
cars_create_list = CarListView.as_view()

class CarDetailView(RetrieveAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    model = Car
    context_object_name = 'car'
    ordering = ['name']
    paginate_by = 10

car_detail = CarDetailView.as_view()

class CarDeleteView(DestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    model = Car
    context_object_name = 'car'
    ordering = ['name']
    paginate_by = 10

car_delete = CarDeleteView.as_view()

class CarUpdateView(UpdateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    model = Car
    context_object_name = 'car'
    ordering = ['name']
    paginate_by = 10

car_update = CarUpdateView.as_view()

