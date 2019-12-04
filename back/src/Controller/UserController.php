<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use JMS\Serializer\SerializerBuilder;

class UserController extends AbstractController
{
    /**
     * @Route("/user/{id}", name="index")
     */
    public function index(Request $request): JsonResponse
    {
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository(User::class)->findOneById($request->get('id'));

        if (empty($user)) {
            return new JsonResponse("Cet utilisateur n'existe pas", Response::HTTP_NOT_FOUND);
        }

        $array = (SerializerBuilder::create()->build())->toArray($user);

        return new JsonResponse($array);
    }
}
