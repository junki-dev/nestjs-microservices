NestJS Microservices Study
================================================

## CLI Sample
nestjs generate module -p common


## References
- https://www.udemy.com/course/nestjs-microservices-build-deploy-a-scaleable-backend/


## k8s command
- kubectl create service nodeport reservations --tcp=3004 --dry-run=client -o yaml > service.yaml
- kubectl create service clusterip auth --tcp=3002,3003 --dry-run=client -o yaml > service.yaml
- kubectl create service clusterip payments --tcp=3001 --dry-run=client -o yaml > service.yaml
- kubectl create secret generic jwt --from-literal=jwtSecret=value
- kubectl get po
- kubectl get svc
- kubectl logs reservations-86bd47cd65-snndx

## helm command
- helm create sleepr
- helm install sleepr .
- helm upgrade sleepr .
