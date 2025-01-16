#!/bin/bash

# Lista de dependencias a verificar
dependencies=(
  "@react-native-async-storage/async-storage"
  "react-native-safe-area-context"
)

echo "Verificando compatibilidad de versiones..."

for package in "${dependencies[@]}"; do
  echo "Chequeando $package..."
  npm ls $package || echo "Error: Conflicto o paquete no instalado."
done

echo "Verificando versiones obsoletas..."
npm outdated
